-- https://atcoder.jp/contests/abc024/tasks/abc024_a

fn :: Int -> Int -> Int -> Int -> Int -> Int -> Int
fn a b c k s t =
    let total = a * s + b * t

    in if s + t >= k then
        total - c * (s + t)
    else
        total

main :: IO ()
main = do
    print(fn 100 200 50 20 40 10)
    -- 3500

    print(fn 400 1000 400 21 10 10)
    -- 14000

    print(fn 400 1000 400 20 10 10)
    -- 6000
