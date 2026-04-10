-- https://atcoder.jp/contests/abc431/tasks/abc431_c

import Data.List (sort)

fn :: Int -> Int -> Int -> [Int] -> [Int] -> String
fn n m k h b =
    if and (zipWith (<=) head body) then
        "Yes"
    else
        "No"
    where
        head = take k (sort h)
        body = reverse (take k (reverse (sort b)))

main :: IO ()
main = do
    putStrLn (fn 6 6 3 [2, 7, 1, 8, 2, 8] [1, 8, 2, 8, 4, 5])
    -- Yes

    putStrLn (fn 1 1 1 [43] [1])
    -- No

    putStrLn (fn 1 1 1 [100] [100])
    -- Yes

    putStrLn (fn 12 15 12 [748, 169, 586, 329, 972, 529, 432, 519, 408, 587, 138, 249] [656, 114, 632, 299, 984, 755, 404, 772, 155, 506, 832, 854, 353, 465, 387])
    -- Yes
