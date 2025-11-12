-- https://atcoder.jp/contests/abc093/tasks/abc093_a

import Data.List (sort)

fn :: String -> String
fn s =
    let sorted = sort s
    in if sorted == ['a', 'b', 'c'] then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn "bac")
    -- Yes

    putStrLn (fn "bab")
    -- No

    putStrLn (fn "abc")
    -- Yes

    putStrLn (fn "aaa")
    -- No
