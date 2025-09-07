-- https://atcoder.jp/contests/abc005/tasks/abc005_1

fn :: Int -> Int -> Int
fn x y =
    y `div` x

main :: IO ()
main = do
    print (fn 4 8)
    -- 2

    print (fn 4 7)
    -- 1

    print (fn 4 3)
    -- 0
