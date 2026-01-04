-- https://atcoder.jp/contests/abc439/tasks/abc439_b

import qualified Data.Set as Set
import Data.Char (digitToInt)

rec :: Int -> Set.Set Int -> String
rec n set
    | n == 1 = "Yes"
    | Set.member n set = "No"
    | otherwise =
        rec next (Set.insert n set)
    where
        next = sum [ d * d | d <- map digitToInt (show n)]

fn :: Int -> String
fn n =
    rec n Set.empty

main :: IO ()
main = do
    putStrLn (fn 2026)
    -- Yes

    putStrLn (fn 439)
    -- No

    putStrLn (fn 440)
    -- Yes
