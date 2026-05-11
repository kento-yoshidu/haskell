-- https://atcoder.jp/contests/abc457/tasks/abc457_a

fn :: Int -> [Int] -> Int -> Int
fn _n a x =
    a !! (x - 1)

main :: IO ()
main = do
    print (fn 5 [1, 2, 3, 4, 5] 3)
    -- 3

    print (fn 10 [6, 6, 9, 6, 10, 5, 7, 2, 8, 2] 4)
    -- 6

    print (fn 10 [4, 4, 4, 3, 4, 2, 1, 1, 2, 1] 10)
    -- 1
