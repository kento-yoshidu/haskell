-- https://atcoder.jp/contests/abc378/tasks/abc378_a

import Data.List (foldl')

fn :: Int -> Int -> Int -> Int -> Int
fn a b c d =
  let
    vec = foldl' (\acc i ->
            take i acc ++ [acc !! i + 1] ++ drop (i + 1) acc
          ) (replicate 5 0) [a, b, c, d]

    -- 判定ロジック
    f i
      | i == 4    = 2
      | i > 1     = 1
      | otherwise = 0

  in sum (map f vec)

main :: IO ()
main = do
    print (fn 2 1 2 1)
    -- 2

    print (fn 4 4 4 1)
    -- 1

    print (fn 1 2 3 4)
    -- 0
