-- https://atcoder.jp/contests/abc423/tasks/abc423_a

fn :: Int -> Int -> Int
fn x c = x `div` (1000 + c) * 1000

main :: IO ()
main = do
    print (fn 650_000 8)
    -- 644_000

    print (fn 1003 4)
    -- 0

    print (fn 10_000_000 24)
    -- 9_765_000
