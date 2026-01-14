-- https://atcoder.jp/contests/abc103/tasks/abc103_a

import Data.List (sort)

fn :: Int -> Int -> Int -> Int
fn a b c =
    let [x, y, z] = sort [a, b, c]

    in (z - y) + (y - x)

main :: IO ()
main = do
    print (fn 1 6 3)
    -- 5

    print (fn 11 5 5)
    -- 6

    print (fn 100 100 100)
    -- 0
