-- https://atcoder.jp/contests/abc108/tasks/abc108_a

fn :: Int -> Int
fn n =
    (n + 1) `div` 2 * (n `div` 2)

main :: IO ()
main = do
    print (fn 3)
    -- 2

    print (fn 6)
    -- 9

    print (fn 11)
    -- 30

    print (fn 50)
    -- 625
