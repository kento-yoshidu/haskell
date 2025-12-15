-- https://atcoder.jp/contests/abc069/tasks/abc069_a

fn :: Int -> Int -> Int
fn n m =
    (n - 1) * (m - 1)

main :: IO ()
main = do
    print (fn 3 4)
    -- 6

    print (fn 2 2)
    -- 1
