-- https://atcoder.jp/contests/abc019/tasks/abc019_1

import Data.List (sort)

fn :: Int -> Int -> Int -> Int
fn a b c =
    let sorted = sort [a, b, c]
    in sorted !! 1

main :: IO ()
main = do
    print (fn 2 3 4)
    -- 3

    print (fn 5 100 5)
    -- 5

    print (fn 3 3 3)
    -- 3

    print (fn 3 3 4)
    -- 3
