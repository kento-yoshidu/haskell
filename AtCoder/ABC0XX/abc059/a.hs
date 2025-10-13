-- https://atcoder.jp/contests/abc059/tasks/abc059_a

import Data.Char

fn :: String -> String -> String -> String
fn a b c =
    let x = toUpper (a !! 0) in
    let y = toUpper (b !! 0) in
    let z = toUpper (c !! 0) in

    x : y : z : []

main :: IO ()
main = do
    putStrLn(fn "atcoder" "beginner" "contest")
    -- ABC

    putStrLn(fn "regident" "register" "number")
    -- RRN

    putStrLn(fn "k" "nearest" "neighbor")
    -- KNN

    putStrLn(fn "async" "layered" "coding")
    -- ALC
