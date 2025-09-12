-- https://atcoder.jp/contests/abc020/tasks/abc020_a

fn :: Int -> String
fn 1 = "ABC"
fn 2 = "chokudai"
fn _ = error "unreachable"

main :: IO ()
main = do
    print (fn 1)
    -- ABC

    print (fn 2)
    -- chokudai
