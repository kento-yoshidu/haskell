-- https://atcoder.jp/contests/abc381/tasks/abc381_a

import Data.List (foldl')

fn :: Int -> String -> String
fn n s
    | even n = "No"
    | countSlash /= 1 = "No"
    | count1 == n `div` 2 && count2 == n `div` 2 = "Yes"
    | otherwise = "No"
  where
    countSlash = length $ filter (== '/') s

    (count1, count2, _) =
        foldl' step (0, 0, True) s

    step (c1, c2, flag) c
        | c == '/' = (c1, c2, False)
        | flag && c == '1' = (c1 + 1, c2, flag)
        | not flag && c == '2' = (c1, c2 + 1, flag)
        | otherwise = (c1, c2, flag)

main :: IO ()
main = do
    putStrLn (fn 5 "11/22")
    -- Yes

    putStrLn (fn 1 "/")
    -- Yes

    putStrLn (fn 4 "1/22")
    -- No

    putStrLn (fn 5 "22/11")
    -- No
