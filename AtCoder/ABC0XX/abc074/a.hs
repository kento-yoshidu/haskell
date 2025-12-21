-- https://atcoder.jp/contests/abc074/tasks/abc074_a

fn :: Int -> Int -> Int
fn n a =
    n * n - a

main :: IO ()
main = do
    print (fn 3 4)
    -- 5

    print (fn 19 100)
    -- 261

    print (fn 10 0)
    -- 100
