-- https://atcoder.jp/contests/abc013/tasks/abc013_1

import Data.Char (ord)

fn :: Char -> Int
fn x =
    ord x - ord 'A' + 1

main :: IO ()
main = do
    print (fn 'A')
    -- 1

    print (fn 'B')
    -- 2

    print (fn 'C')
    -- 3

    print (fn 'D')
    -- 4
