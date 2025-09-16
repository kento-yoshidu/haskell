-- https://atcoder.jp/contests/abc026/tasks/abc026_a

fn :: Int -> Int
fn a =
    a `div` 2 * a `div` 2

main :: IO ()
main = do
    print(fn 10)
    -- 25

    print(fn 60)
    -- 900
