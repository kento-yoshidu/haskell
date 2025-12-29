-- https://atcoder.jp/contests/abc085/tasks/abc085_a

fn :: String -> String
fn s = "2018" ++ drop 4 s

main :: IO ()
main = do
    putStrLn (fn "2017/01/07")
    -- 2018/01/07

    putStrLn (fn "2017/01/31")
    -- 2018/01/31
