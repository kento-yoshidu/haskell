-- https://atcoder.jp/contests/abc403/tasks/abc403_a

fn :: Int -> [Int] -> Int
fn n a =
    sum [n | (i, n) <- zip [0..] a, even i]

main :: IO ()
main = do
    print (fn 7 [3, 1, 4, 1, 5, 9, 2])
    -- 4

    print (fn 1 [100])
    -- 100

    print (fn 14 [100, 10, 1, 10, 100, 10, 1, 10, 100, 10, 1, 10, 100, 10])
    -- 403
