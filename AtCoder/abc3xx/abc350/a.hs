-- https://atcoder.jp/contests/abc350/tasks/abc350_a

fn :: String -> String
fn s
    | num < 350 && num /= 316 = "Yes"
    | otherwise               = "No"
  where
    num = read (drop 3 s)

main :: IO ()
main = do
    putStrLn (fn "ABC349")
    -- Yes

    putStrLn (fn "ABC350")
    -- No

    putStrLn (fn "ABC316")
    -- No
