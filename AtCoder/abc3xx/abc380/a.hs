-- https://atcoder.jp/contests/abc380/tasks/abc380_a

import Data.List (sort)

fn :: Int -> String
fn n
    | sort (show n) == "122333" = "Yes"
    | otherwise                 = "No"

main :: IO ()
main = do
    putStrLn (fn 123233)
    -- Yes

    putStrLn (fn 123234)
    -- No

    putStrLn (fn 323132)
    -- Yes

    putStrLn (fn 500000)
    -- No
