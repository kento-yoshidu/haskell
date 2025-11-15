-- https://atcoder.jp/contests/abc047/tasks/abc047_a

import Data.List (sort)

fn :: Int -> Int -> Int -> String
fn a b c =
    let sorted = sort[a, b, c] in

    if sorted !! 0 + sorted !! 1 == sorted !! 2 then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn(fn 10 30 20)
    -- Yes

    putStrLn(fn 30 30 100)
    -- No

    putStrLn(fn 56 25 31)
    -- Yes
