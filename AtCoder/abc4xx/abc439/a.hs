-- https://atcoder.jp/contests/abc439/tasks/abc439_a

fn :: Int -> Int
fn n =
    2 ^ n - 2 * n

main :: IO ()
main = do
    print (fn 1)
    -- 0

    print (fn 2)
    -- 0

    print (fn 11)
    -- 2026
