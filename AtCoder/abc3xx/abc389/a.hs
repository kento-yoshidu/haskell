-- https://atcoder.jp/contests/abc389/tasks/abc389_a

import Data.Char (digitToInt)

fn :: String -> Int
fn s =
    let a = digitToInt (s !! 0)
        b = digitToInt (s !! 2)
    in a * b

main :: IO ()
main = do
    print (fn "3x8")
    -- 24

    print (fn "9x9")
    -- 81
