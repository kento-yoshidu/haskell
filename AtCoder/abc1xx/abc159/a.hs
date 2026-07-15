-- https://atcoder.jp/contests/abc159/tasks/abc159_a

fn :: Int -> Int -> Int
fn n m =
    n * (n - 1) `div` 2 + m * (m - 1) `div` 2

main :: IO ()
main = do
    print (fn 2 1)
    -- 1

    print (fn 4 3)
    -- 9

    print (fn 1 1)
    -- 0

    print (fn 13 3)
    -- 81
