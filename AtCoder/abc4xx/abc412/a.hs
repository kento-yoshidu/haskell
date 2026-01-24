-- https://atcoder.jp/contests/abc412/tasks/abc412_a

fn :: Int -> [(Int, Int)] -> Int
fn n ab =
    length $ filter (\(a, b) -> a < b) ab

main :: IO ()
main = do
    print (fn 4 [(2, 8), (5, 5), (5, 4), (6, 7)])
    -- 2

    print (fn 5 [(1, 1), (1, 1), (1, 1), (1, 1), (1, 1)])
    -- 0

    print (fn 6 [(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1)])
    -- 3
