-- https://atcoder.jp/contests/abc158/tasks/abc158_a

fn :: String -> String
fn s =
    if not (s !! 0 == s !! 1 && s !! 1 == s !! 2) then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn "ABA")
    -- Yes

    putStrLn (fn "BBA")
    -- Yes

    putStrLn (fn "BBB")
    -- No
