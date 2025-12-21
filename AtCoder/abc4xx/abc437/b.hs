-- https://atcoder.jp/contests/abc437/tasks/abc437_b

fn :: Int -> Int -> Int -> [[Int]] -> [Int] -> Int
fn h w n a b =
    maximum
        [ length [ num | num <- v, num `elem` b] | v <- a]

main :: IO ()
main = do
    print (fn 3 4 5 [[12, 3, 5, 7], [6, 10, 11, 9], [1, 2, 4, 8]] [2, 4, 9, 6, 11])
    -- 3

    print (fn 3 5 2 [[81, 63, 31, 16, 15], [30, 3, 6, 54, 24], [26, 41, 48, 64, 66]] [44, 79])
    -- 0

    print (fn 3 5 12 [[78, 19, 70, 58, 83], [12, 30, 80, 20, 27], [48, 71, 8, 43, 82]] [82, 30, 43, 8, 80, 70, 20, 78, 12, 71, 19, 48])
    -- 5
