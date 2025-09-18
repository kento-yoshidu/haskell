-- https://atcoder.jp/contests/abc029/tasks/abc029_a

fn :: String -> String
fn w = w ++ "s"

main :: IO ()
main = do
    putStrLn(fn "dog")
    -- dogs

    putStrLn(fn "chokudai")
    -- chokudais
