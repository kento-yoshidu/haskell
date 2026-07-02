-- https://atcoder.jp/contests/abc379/tasks/abc379_a

import Text.Printf (formatString)

fn :: Int -> String
fn n =
    let a = n `div` 100
        b = n `div` 10 `mod` 10
        c = n `mod` 10
    in show b ++ show c ++ show a ++ " " ++ show c ++ show a ++ show b

main :: IO ()
main = do
    putStrLn (fn 379)
    -- 793 937

    putStrLn (fn 919)
    -- 199 991
