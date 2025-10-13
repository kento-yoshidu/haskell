-- https://atcoder.jp/contests/abc027/tasks/abc027_a

import Data.Bits (xor)

fn :: Int -> Int -> Int -> Int
fn a b c =
    a `xor` b `xor` c

main :: IO ()
main = do
    print(fn 1 1 2)
    -- 2

    print(fn 4 3 4)
    -- 3

    print(fn 5 5 5)
    -- 5
