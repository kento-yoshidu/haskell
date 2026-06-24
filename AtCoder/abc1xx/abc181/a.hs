-- https://atcoder.jp/contests/abc181/tasks/abc181_a

import Data.Bool (bool)

fn :: Int -> String
fn = bool "Black" "White" . even

main :: IO ()
main = do
    putStrLn (fn 2)
    -- White

    putStrLn (fn 5)
    -- Black
