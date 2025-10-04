-- https://atcoder.jp/contests/abc042/tasks/abc042_a

import Data.List (sort)

fn :: Int -> Int -> Int -> String
fn a b c =
    let sorted = sort [a, b, c] in

    if sorted == [5, 5, 7] then
        "YES"
    else
        "NO"

main :: IO ()
main = do
    putStrLn(fn 5 5 7)
    -- YES

    putStrLn(fn 7 7 5)
    -- NO
