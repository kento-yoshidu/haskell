-- https://atcoder.jp/contests/abc032/tasks/abc032_a

import Data.List (find)
import Data.Maybe (fromJust)

fn :: Int -> Int -> Int -> Int
fn a b n =
    fromJust $ find (\i -> i `mod` a == 0 && i `mod` b == 0) [n..]

main :: IO ()
main = do
    print(fn 2 3 8)
    -- 12

    print(fn 2 2 2)
    -- 2

    print(fn 12 8 25)
    -- 48
