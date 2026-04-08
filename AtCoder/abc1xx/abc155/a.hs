-- https://atcoder.jp/contests/abc155/tasks/abc155_a

import Data.Set as Set

fn :: Int -> Int -> Int -> String
fn a b c =
    if Set.size (Set.fromList [a, b, c]) == 2 then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn 5 7 5)
    -- Yes

    putStrLn (fn 4 4 4)
    -- No

    putStrLn (fn 4 9 6)
    -- No

    putStrLn (fn 3 3 4)
    -- Yes
