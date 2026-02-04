-- https://atcoder.jp/contests/abc132/tasks/abc132_a

import Data.List (nub, sort)

fn :: String -> String
fn s =
    if length (nub (sort s)) == 2 then "Yes" else "No"

main :: IO ()
main = do
    putStrLn (fn "ASSA")
    -- Yes

    putStrLn (fn "STOP")
    -- No

    putStrLn (fn "FFEE")
    -- Yes

    putStrLn (fn "FREE")
    -- No
