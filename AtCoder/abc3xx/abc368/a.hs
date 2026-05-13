-- https://atcoder.jp/contests/abc368/tasks/abc368_a

import Data.List (take)

fn :: Int -> Int -> [Int] -> [Int]
fn n k a =
    drop (n - k) a ++ take (n - k) a

main :: IO ()
main = do
    print (fn 5 3 [1, 2, 3, 4, 5])
    -- [3, 4, 5, 1, 2]

    print (fn 6 2 [1, 2, 1, 2, 1, 2])
    -- [1, 2, 1, 2, 1, 2]
