-- https://atcoder.jp/contests/abc346/tasks/abc346_a

fn :: Int -> [Int] -> [Int]
fn n (x:y:xs) = x * y : fn n (y:xs)
fn _ _        = []

main :: IO ()
main = do
    print (fn 3 [3, 4, 6])
    -- [12, 24]

    print (fn 5 [22, 75, 26, 45, 72])
    -- [1650, 1950, 1170, 3240]
