-- https://atcoder.jp/contests/abc186/tasks/abc186_a

fn :: Int -> Int -> Int
fn n w =
    n `div` w

main :: IO ()
main = do
    print (fn 10 3)
    -- 3

    print (fn 1000 1)
    -- 1000
