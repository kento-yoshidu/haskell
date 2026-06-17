-- https://atcoder.jp/contests/abc386/tasks/abc386_a

import Data.List (sort, nub)

fn :: Int -> Int -> Int -> Int -> String
fn a b c d
    | length (nub (sort [a, b, c, d])) == 2 = "Yes"
    | otherwise = "No"

main :: IO ()
main = do
    putStrLn (fn 7 7 7 1)
    -- Yes

    putStrLn (fn 13 12 11 10)
    -- No

    putStrLn (fn 3 3 5 5)
    -- Yes

    putStrLn (fn 8 8 8 8)
    -- No

    putStrLn (fn 1 3 4 1)
    -- No
