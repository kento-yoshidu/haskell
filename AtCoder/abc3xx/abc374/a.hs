-- https://atcoder.jp/contests/abc374/tasks/abc374_a

fn :: String -> String
fn s =
    if drop (length s - 3) s == "san" then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn "takahashisan")
    -- Yes

    putStrLn (fn "aokikun")
    -- No
