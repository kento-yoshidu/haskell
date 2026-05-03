-- https://atcoder.jp/contests/abc129/tasks/abc129_a

import Data.List (sort)

fn :: Int -> Int -> Int -> Int
fn p q r =
    let sorted = sort [p, q, r]
    in sorted !! 0 + sorted !! 1

main :: IO ()
main = do
    print (fn 1 3 4)
    -- 4

    print (fn 3 2 3)
    -- 5
