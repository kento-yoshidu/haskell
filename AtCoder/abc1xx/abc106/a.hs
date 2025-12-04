-- https://atcoder.jp/contests/abc106/tasks/abc106_a

fn :: Int -> Int -> Int
fn a b =
    (a - 1) * (b - 1)

main :: IO ()
main = do
    print (fn 2 2)
    -- 1

    print (fn 5 7)
    -- 24
