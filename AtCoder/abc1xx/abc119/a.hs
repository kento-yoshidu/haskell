-- https://atcoder.jp/contests/abc119/tasks/abc119_b

import Data.List.Split (splitOn)

fn :: String -> String
fn s =
    if (read (splitOn "/" s !! 1) :: Int) > 4 then
        "TBD"
    else
        "Heisei"

main :: IO ()
main = do
    putStrLn (fn "2019/04/30")
    -- Heisei

    putStrLn (fn "2019/11/30")
    -- TBD
