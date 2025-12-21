-- https://atcoder.jp/contests/abc075/tasks/abc075_a

import Data.Bits (xor)

fn :: Int -> Int -> Int -> Int
fn a b c =
    a `xor` b `xor` c

main :: IO ()
main = do
    print (fn 5 7 5)
    -- 7

    print (fn 1 1 7)
    -- 7

    print (fn (-100) 100 100)
    -- -100
