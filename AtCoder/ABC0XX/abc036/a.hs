-- https://atcoder.jp/contests/abc036/tasks/abc036_a

fn :: Int -> Int -> Int
fn a b =
    (a + b - 1) `div` a

main :: IO ()
main = do
    print(fn 12 36)
    -- 3

    print(fn 12 100)
    -- 9
