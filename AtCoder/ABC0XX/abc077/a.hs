-- https://atcoder.jp/contests/abc077/tasks/abc077_a

fn :: String -> String -> String
fn s t =
    if reverse s == t then
        "YES"
    else
        "NO"

main :: IO ()
main = do
    putStrLn (fn "pot" "top")
    -- YES

    putStrLn (fn "tab" "bet")
    -- NO

    putStrLn (fn "eye" "eel")
    -- NO
