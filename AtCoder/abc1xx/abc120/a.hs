-- https://atcoder.jp/contests/abc120/tasks/abc120_a

fn :: Int -> Int -> Int -> Int
fn a b c =
    min (b `div` a) c

main :: IO ()
main = do
    print (fn 2 11 4)
    -- 4

    print (fn 3 9 5)
    -- 3

    print (fn 100 1 10)
    -- 0
