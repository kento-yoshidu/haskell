-- https://atcoder.jp/contests/abc148/tasks/abc148_a

import Data.Bits (xor)

fn :: Int -> Int -> Int
fn a b =
    a `xor` b

main :: IO ()
main = do
    print (fn 3 1)
    -- 2

    print (fn 1 2)
    -- 3
