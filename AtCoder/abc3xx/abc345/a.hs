-- https://atcoder.jp/contests/abc345/tasks/abc345_a

fn :: String -> String
fn s
    | head s /= '<'       = "No"
    | last s /= '>'       = "No"
    | all (== '=') middle = "Yes"
    | otherwise           = "No"

main :: IO ()
main = do
    putStrLn (fn "<====>")
    -- Yes

    putStrLn (fn "==>")
    -- No

    putStrLn (fn "<>>")
    -- No
