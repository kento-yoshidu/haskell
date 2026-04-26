-- https://atcoder.jp/contests/abc126/tasks/abc126_a

import Data.Char (toLower)

fn :: Int -> Int -> String -> String
fn n k s =
    [ if i == k then toLower c else c
    | (i, c) <- zip [1..] s
    ]

main :: IO ()
main = do
    putStrLn (fn 3 1 "ABC")
    -- aBC

    putStrLn (fn 4 3 "CABA")
    -- CAbA
