-- https://atcoder.jp/contests/abc014/tasks/abc014_1

fn :: Int -> Int -> Int
fn a b =
    let x = ceiling(fromIntegral a / fromIntegral b)

    in x * b - a

main :: IO ()
main = do
    print (fn 7 3)
    -- 2

    print (fn 5 5)
    -- 0

    print (fn 1 100)
    -- 99

    print (fn 25 12)
    -- 11
