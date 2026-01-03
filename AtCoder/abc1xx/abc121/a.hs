-- https://atcoder.jp/contests/abc121/tasks/abc121_a

fn :: Int -> Int -> Int -> Int -> Int
fn a b c d =
    (a - c) * (b - d)

main :: IO ()
main = do
    print (fn 3 2 2 1)
    -- 1

    print (fn 5 5 2 3)
    -- 6

    print (fn 2 4 2 4)
    -- 0
