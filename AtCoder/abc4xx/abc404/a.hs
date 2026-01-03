-- https://atcoder.jp/contests/abc404/tasks/abc404_a

import Data.List (find)
import Data.Maybe (fromJust)

fn :: String -> Char
fn s =
    fromJust $ find (`notElem` s) ['a'..'z']

main :: IO ()
main = do
    print (fn "a")
    -- b

    print (fn "abcdfhijklmnopqrstuvwxyz")
    -- e

    print (fn "qazplwsxokmedcijnrfvuhbgt")
    -- y
