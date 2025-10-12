-- https://atcoder.jp/contests/abc057/tasks/abc057_a

fn :: Int -> Int -> Int
fn a b =
    (a + b) `mod` 24

main :: IO ()
main = do
    print(fn 9 12)
    -- 21

    print(fn 19 0)
    -- 19

    print(fn 23 2)
    -- 1
