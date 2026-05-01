-- https://atcoder.jp/contests/abc128/tasks/abc128_a

fn :: Int -> Int -> Int
fn a p =
    (a * 3 + p) `div` 2

main :: IO ()
main = do
    print (fn 1 3)
    -- 3

    print (fn 0 1)
    -- 0

    print (fn 32 21)
    -- 58
