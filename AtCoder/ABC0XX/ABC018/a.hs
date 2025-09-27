-- https://atcoder.jp/contests/abc018/tasks/abc018_1

import Data.List (sortBy, elemIndex)
import Data.Maybe (fromJust)

fn :: Int -> Int -> Int -> (Int, Int, Int)
fn a b c =
    let xs = [a, b, c]
        sorted = sortBy (flip compare) xs
        ranks = map (\x -> fromJust (elemIndex x sorted) + 1) xs
    in case ranks of
        [r1, r2, r3] -> (r1, r2, r3)
        _ -> error "Impossible"

main :: IO ()
main = do
    print (fn 12 18 11)
    -- (2, 1, 3)

    print (fn 10 20 30)
    -- (3, 2, 1)
