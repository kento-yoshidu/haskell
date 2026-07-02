-- https://atcoder.jp/contests/abc151/tasks/abc151_a

import Data.Char (ord, chr)

fn :: Char -> Char
fn = chr . (+1) . ord

main :: IO ()
main = do
    print (fn 'a')
    -- b

    print (fn 'y')
    -- z
