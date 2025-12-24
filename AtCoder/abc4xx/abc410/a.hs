-- https://atcoder.jp/contests/abc410/tasks/abc410_a

fn :: Int -> [Int] -> Int -> Int
fn n a k =
    length $ filter (\x -> x >= k )a

main :: IO ()
main = do
    print (fn 5 [3, 1, 4, 1, 5] 4)
    -- 2

    print (fn 1 [1] 100)
    -- 0

    print (fn 15 [18, 89, 31, 2, 15, 93, 64, 78, 58, 19, 79, 59, 24, 50, 30] 38)
    -- 8
