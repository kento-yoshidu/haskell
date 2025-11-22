-- https://atcoder.jp/contests/abc432/tasks/abc432_a

import Data.List (sort)

fn :: Int -> Int -> Int -> Int
fn a b c =
    case sort [a, b, c] of
        [x, y, z] -> z * 100 + y * 10 + x
        _ -> error "Unreachable"

main :: IO ()
main = do
    print (fn 3 2 4)
    -- 432

    print (fn 7 7 7)
    -- 777

    print (fn 9 1 9)
    -- 991
