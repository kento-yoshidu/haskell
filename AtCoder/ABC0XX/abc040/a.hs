-- https://atcoder.jp/contests/abc040/tasks/abc040_a

fn :: Int -> Int -> Int
fn n x =
    min (n - x) (x - 1)

main :: IO ()
main = do
    print(fn 5 2)
    -- 1

    print(fn 6 4)
    -- 2

    print(fn 90 30)
    -- 29
