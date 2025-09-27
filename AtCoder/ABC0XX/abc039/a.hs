-- https://atcoder.jp/contests/abc039/tasks/abc039_a

fn :: Int -> Int -> Int -> Int
fn a b c =
    (a * b + a * c + b * c) * 2

main :: IO ()
main = do
    print(fn 2 3 4)
    -- 52

    print(fn 3 4 2)
    -- 52

    print(fn 100 100 100)
    -- 60000

    print(fn 1 1 1)
    -- 6
