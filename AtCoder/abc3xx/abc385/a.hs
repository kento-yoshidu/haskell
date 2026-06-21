-- https://atcoder.jp/contests/abc385/tasks/abc385_a

import Data.List (sort)

fn :: Int -> Int -> Int -> String
fn a b c =
    let sorted = sort [a, b, c]

    in if head sorted + sorted !! 1 == sorted !! 2 then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn 3 8 5)
    -- Yes

    putStrLn (fn 2 2 2)
    -- No

    putStrLn (fn 1 2 4)
    -- No
