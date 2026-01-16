-- https://atcoder.jp/contests/abc124/tasks/abc124_a

fn :: Int -> Int -> Int
fn a b =
    if a == b then
        a + b
    else
        (max a b) + (max a b) - 1

main :: IO ()
main = do
    print(fn 5 3)
    -- 9

    print(fn 3 4)
    -- 7

    print(fn 6 6)
    -- 12
