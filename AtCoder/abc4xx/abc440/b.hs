-- https://atcoder.jp/contests/abc440/tasks/abc440_b

import Data.List (sortOn)

fn :: Int -> [Int] -> [Int]
fn n t =
    take 3
    . map fst
    . sortOn snd
    $ zip [1..] t

main :: IO ()
main = do
    print (fn 4 [100, 110, 105, 95])
    -- [4, 1, 3]

    print (fn 8 [72, 74, 69, 70, 73, 75, 71, 77])
    -- [3, 4, 7]
