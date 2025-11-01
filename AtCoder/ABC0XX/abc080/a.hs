-- https://atcoder.jp/contests/abc080/tasks/abc080_a

fn :: Int -> Int -> Int -> Int
fn n a b =
    min (n * a) b

main :: IO ()
main = do
    print (fn 7 17 120)
    -- 119

    print (fn 5 20 100)
    -- 100

    print (fn 6 18 100)
    -- 100
