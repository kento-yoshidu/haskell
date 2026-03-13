-- https://atcoder.jp/contests/abc383/tasks/abc383_a

import Data.List (foldl', partition)

fn :: Int -> [(Int, Int)] -> Int
fn n tv =
    snd $ foldl' f (Nothing, 0) tv
  where
    f (Nothing, cur) (t, v) = (Just t, cur + v)
    f (Just prev, cur) (t, v) =
        let cur' = max 0 (cur - (t - prev)) + v
        in (Just t, cur')

main :: IO ()
main = do
    print (fn 4 [(1, 3), (3, 1), (4, 4), (7, 1)])
    -- 3

    print (fn 3 [(1, 8), (10, 11), (21, 5)])
    -- 5

    print (fn 10 [(2, 1), (22, 10), (26, 17), (29, 2), (45, 20), (47, 32), (72, 12), (75, 1), (81, 31), (97, 7)])
    -- 57
