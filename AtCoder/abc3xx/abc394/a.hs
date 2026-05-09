-- https://atcoder.jp/contests/abc394/tasks/abc394_a

fn :: String -> String
fn s =
    filter (\c -> c == '2') s

main :: IO ()
main = do
    putStrLn (fn "20250222")
    -- 22222

    putStrLn (fn "2")
    -- 2

    putStrLn (fn "22222000111222222")
    -- 22222222222
