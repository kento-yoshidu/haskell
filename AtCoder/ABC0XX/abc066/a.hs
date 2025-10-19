-- https://atcoder.jp/contests/abc066/tasks/abc066_a

import Data.List (sort)

fn :: Int -> Int -> Int -> Int
fn a b c =
    let sorted = sort [a, b, c] in
    sorted !! 0 + sorted !! 1

main :: IO ()
main = do
    print (fn 700 600 780)
    -- 1300

    print (fn 10000 10000 10000)
    -- 20000
