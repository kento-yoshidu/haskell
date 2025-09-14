-- https://atcoder.jp/contests/abc009/tasks/abc009_1

fn :: Int -> Int
fn n =
    (n + 1) `div` 2

main :: IO ()
main = do
    print (fn 2)
    -- 1

    print (fn 5)
    -- 3

    print (fn 1)
    -- 1
