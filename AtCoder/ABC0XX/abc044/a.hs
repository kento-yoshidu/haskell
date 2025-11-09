-- https://atcoder.jp/contests/abc044/tasks/abc044_a

fn :: Int -> Int -> Int -> Int -> Int
fn n k x y =
    (min n k) * x + (max 0 (n - k)) * y

main :: IO ()
main = do
    print(fn 5 3 10000 9000)
    -- 48000

    print(fn 2 3 10000 9000)
    -- 20000
