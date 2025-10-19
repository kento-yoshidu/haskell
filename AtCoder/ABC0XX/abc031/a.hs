-- https://atcoder.jp/contests/abc031/tasks/abc031_a

fn :: Int -> Int -> Int
fn a d =
    ((min a d ) + 1) * max a d

main :: IO ()
main = do
    print(fn 31 87)
    -- 2784

    print(fn 101 65)
    -- 6666

    print(fn 3 3)
    -- 12
