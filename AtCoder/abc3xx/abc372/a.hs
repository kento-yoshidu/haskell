-- https://atcoder.jp/contests/abc372/tasks/abc372_a

fn :: String -> String
fn = filter (/= '.')

main :: IO ()
main = do
    putStrLn (fn ".v.")
    -- v

    putStrLn (fn "chokudai")
    -- chokudai

    putStrLn (fn "...")
    --
