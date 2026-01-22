-- https://atcoder.jp/contests/abc414/tasks/abc414_a

fn :: Int -> Int -> Int -> [(Int, Int)] -> Int
fn n l r xy =
    length $ filter (\(x, y) -> x <= l && r <= y) xy

main :: IO ()
main = do
    print (fn 5 19 22 [(17, 23), (20, 23), (19, 22), (0, 23), (12, 20)])
    -- 3

    print (fn 3 12 13 [(0, 1), (0, 1), (0, 1)])
    -- 0

    print (fn 10 8 14 [(5, 20), (14, 21), (9, 21), (5, 23), (8, 10), (0, 14), (3, 8), (2, 6), (0, 16), (5, 20)])
    -- 5
