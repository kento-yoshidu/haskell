-- https://atcoder.jp/contests/abc392/tasks/abc392_a

import Data.List (sort)

fn :: Int -> Int -> Int -> String
fn a b c =
    let sorted = sort [a, b, c]
    in if sorted !! 0 * sorted !! 1 == sorted !! 2 then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn 3 15 5)
    -- Yes

    putStrLn (fn 5 3 2)
    -- No

    putStrLn (fn 3 3 9)
    -- Yes
