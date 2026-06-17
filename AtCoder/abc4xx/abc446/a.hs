-- https://atcoder.jp/contests/abc446/tasks/abc446_a

import Data.Char (toLower)

fn :: String -> String
fn s =
    "Of" ++ map toLower s

main :: IO ()
main = do
    putStrLn (fn "Glen")
    -- Ofglen

    putStrLn (fn "I")
    -- Ofi

    putStr (fn "Fred")
    -- Offred
