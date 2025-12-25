-- https://atcoder.jp/contests/abc079/tasks/abc079_a

import Data.List (group)

fn :: String -> String
fn n =
    if any (\g -> length g >= 3) (group n)
       then "Yes"
       else "No"

main :: IO ()
main = do
    putStrLn (fn "1118")
    -- Yes

    putStrLn (fn "7777")
    -- Yes

    putStrLn (fn "1234")
    -- No
