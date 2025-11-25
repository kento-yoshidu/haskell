-- https://atcoder.jp/contests/abc422/tasks/abc422_a

import Data.Char (digitToInt)

fn :: String -> String
fn s =
    let a = digitToInt (s !! 0)
        b = digitToInt (s !! 2)
    in if b == 8 then
        show (a+1) ++ "-1"
    else
        show a ++ "-" ++ show (b+1)

main :: IO ()
main = do
    putStrLn (fn "4-2")
    -- 4-3

    putStrLn (fn "1-8")
    -- 2-1

    putStrLn (fn "3-3")
    -- 3-4
