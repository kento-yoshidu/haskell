-- https://atcoder.jp/contests/abc411/tasks/abc411_a

fn :: String -> Int -> String
fn p l
    | length p >= l = "Yes"
    | otherwise = "No"

main :: IO ()
main = do
    putStrLn (fn "chokudai" 5)
    -- Yes

    putStrLn (fn "ac" 3)
    -- No

    putStrLn (fn "atcoder" 7)
    -- Yes
