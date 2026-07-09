-- https://atcoder.jp/contests/abc157/tasks/abc157_a

fn :: Int -> Int
fn n = (n + 1) `div` 2

main :: IO ()
main = do
    print (fn 5)
    -- 3

    print (fn 2)
    -- 1

    print (fn 100)
    -- 50
