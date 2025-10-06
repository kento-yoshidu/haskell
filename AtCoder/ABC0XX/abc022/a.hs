-- https://atcoder.jp/contests/abc022/tasks/abc022_a

fn :: Int -> Int -> Int -> Int -> [Int] -> Int
fn n s t w a =
    length $ filter (\x -> s <= x && x <= t ) (scanl (+) w a)

main :: IO ()
main = do
    print(fn 5 60 70 50 [10, 10, 10, 10])
    -- 2

    print(fn 5 50 100 120 [-10, -20, -30, 70])