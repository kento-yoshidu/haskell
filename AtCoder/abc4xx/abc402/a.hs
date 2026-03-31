-- https://atcoder.jp/contests/abc402/tasks/abc402_a

import Data.Char (isUpper)

fn :: String -> String
fn s =
    filter isUpper s

main :: IO ()
main = do
    putStrLn (fn "AtCoderBeginnerContest")
    -- ACBC

    putStrLn (fn "PaymentRequired")
    -- PR

    putStrLn (fn "program")
    --
