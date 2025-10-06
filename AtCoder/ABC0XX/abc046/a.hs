-- https://atcoder.jp/contests/abc046/tasks/abc046_a

import Data.Set as Set

fn :: Int -> Int -> Int -> Int
fn a b c =
    Set.size (Set.fromList [a, b, c])

main :: IO ()
main = do
    print(fn 3 1 4)
    -- 3

    print(fn 3 3 33)
    -- 2
