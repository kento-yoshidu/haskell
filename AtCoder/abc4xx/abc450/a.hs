-- https://atcoder.jp/contests/abc450/tasks/abc450_a

import Data.List (intercalate)

fn :: Int -> String
fn n =
    intercalate "," $ map show [n, n-1 .. 1]

main :: IO ()
main = do
    putStrLn (fn 9)
    -- 9,8,7,6,5,4,3,2,1

    putStrLn (fn 5)
    -- 5,4,3,2,1

    putStrLn (fn 1)
    -- 1
