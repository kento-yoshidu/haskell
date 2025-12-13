-- https://atcoder.jp/contests/abc110/tasks/abc110_a

import Data.List (sort)

fn :: Int -> Int -> Int -> Int
fn a b c =
    let sorted = sort [a, b, c]
    in sorted !! 2 * 10 + sorted !! 1 + sorted !! 0

main :: IO ()
main = do
    print (fn 1 5 2)
    -- 53

    print (fn 9 9 9)
    -- 108

    print (fn 6 6 7)
    -- 82
