-- https://atcoder.jp/contests/abc003/tasks/abc003_1

fn :: Int -> Int
fn n =
    sum [num * 10000 | num <- [1..n]] `div` n

main :: IO ()
main = do
    print (fn 6)
    -- 35000

    print (fn 91)
    -- 460000
