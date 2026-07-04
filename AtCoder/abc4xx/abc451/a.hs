-- https://atcoder.jp/contests/abc451/tasks/abc451_a

fn :: String -> String
fn s
    | length s `mod` 5 == 0 = "Yes"
    | otherwise             = "No"

main :: IO ()
main = do
    putStrLn (fn "legal")
    -- Yes

    putStrLn (fn "atcoder")
    -- No

    putStrLn (fn "illegal")
    -- No
