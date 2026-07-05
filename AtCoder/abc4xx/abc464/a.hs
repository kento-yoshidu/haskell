-- https://atcoder.jp/contests/abc464/tasks/abc464_a

fn :: String -> String
fn s =
    if e > w then
        "East"
    else
        "West"
  where
    e = length (filter (== 'E') s)
    w = length (filter (== 'W') s)

main :: IO ()
main = do
    putStrLn (fn "EEWEW")
    -- East

    putStrLn (fn "WWWWWWW")
    -- West
