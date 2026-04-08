-- https://atcoder.jp/contests/abc377/tasks/abc377_a

import Data.List (sort)

fn :: String -> String
fn s =
    if sort s == "ABC" then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn "BAC")
    -- Yes

    putStrLn (fn "AAC")
    -- No

    putStrLn (fn "ABC")
    -- Yes

    putStrLn (fn "ARC")
    -- No
