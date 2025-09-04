-- https://atcoder.jp/contests/abc001/tasks/abc001_1

fn :: Int -> Int -> Int
fn a b =
    a - b

main :: IO ()
main = do
    print (fn 15 10)
    -- 5

    print (fn 0 0)
    -- 0

    print (fn 5 20)
    -- -15
