-- https://atcoder.jp/contests/abc184/tasks/abc184_a

fn :: Int -> Int -> Int -> Int -> Int
fn a b c d =
    a * d - b * c

main :: IO ()
main = do
    print (fn 1 2 3 4)
    -- -2

    print (fn 0 (-1) 1 0)
    -- 1

    print (fn 100 100 100 100)
    -- 0
