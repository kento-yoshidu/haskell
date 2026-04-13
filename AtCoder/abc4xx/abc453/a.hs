-- https://atcoder.jp/contests/abc453/tasks/abc453_a

import Data.List (foldl')

fn :: Int -> String -> String
fn n s = reverse ans
  where
    (ans, started) = foldl' step ([], False) s

    step (acc, started) c
        | c == 'o' && not started = (acc, False)
        | otherwise               = (c : acc, True)

fn2 :: Int -> String -> String
fn2 _ = dropWhile (== 'o')

main :: IO ()
main = do
    putStrLn (fn 7 "ooparts")
    putStrLn (fn2 7 "ooparts")
    -- parts

    putStrLn (fn 6 "abcooo")
    putStrLn (fn2 6 "abcooo")
    -- abcooo

    putStrLn (fn 5 "ooooo")
    putStrLn (fn2 5 "ooooo")
    --
