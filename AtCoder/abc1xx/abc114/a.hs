-- https://atcoder.jp/contests/abc114/tasks/abc114_a

fn :: Int -> String
fn 3 = "YES"
fn 5 = "YES"
fn 7 = "YES"
fn _ = "NO"

main :: IO ()
main = do
    putStrLn (fn 5)
    -- YES

    putStrLn (fn 6)
    -- NO
