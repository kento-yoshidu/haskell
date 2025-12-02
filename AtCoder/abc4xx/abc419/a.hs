-- https://atcoder.jp/contests/abc419/tasks/abc419_a

fn :: String -> String
fn "red"   = "SSS"
fn "blue"  = "FFF"
fn "green" = "MMM"
fn _       = "Unknown"

main :: IO ()
main = do
    putStrLn (fn "red")
    -- SSS

    putStrLn (fn "atcoder")
    -- Unknown
