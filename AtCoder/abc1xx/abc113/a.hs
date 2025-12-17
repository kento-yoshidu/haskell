-- https://atcoder.jp/contests/abc113/tasks/abc113_a

fn :: Int -> Int -> Int
fn x y =
    x + y `div` 2

main :: IO ()
main = do
    print (fn 81 58)
    -- 110

    print (fn 4 54)
    -- 31
