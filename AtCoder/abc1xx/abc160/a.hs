-- https://atcoder.jp/contests/abc160/tasks/abc160_a

fn :: String -> String
fn s =
    if s !! 2 == s !! 3 && s !! 4 == s !! 5 then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn "sippuu")
    -- Yes

    putStrLn (fn "iphone")
    -- No

    putStrLn (fn "coffee")
    -- Yes
