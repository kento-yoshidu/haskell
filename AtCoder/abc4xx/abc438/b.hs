-- https://atcoder.jp/contests/abc438/tasks/abc438_b

import Data.Char (digitToInt)

fn :: Int -> Int -> String -> String -> Int
fn n m s t =
    let cost start =
            sum [ (digitToInt (s !! (start + i))
                - digitToInt (t !! i) + 10) `mod` 10
                | i <- [0 .. m - 1]
                ]
    in minimum [ cost start | start <- [0 .. n - m] ]

main :: IO ()
main = do
    print (fn 4 2 "2025" "91")
    -- 2

    print (fn 3 2 "438" "38")
    -- 0

    print (fn 5 5 "00000" "11111")
    -- 45

    print (fn 8 3 "20251227" "438")
    -- 13
