-- https://atcoder.jp/contests/abc347/tasks/abc347_a

fn :: Int -> Int -> [Int] -> [Int]
fn _ k a =
    (map (`div` k) . filter ((== 0) . (`mod` k))) a

main :: IO ()
main = do
    print (fn 5 2 [2, 5, 6, 7, 10])
    -- [1, 3, 5]

    print (fn 3 1 [3, 4, 7])
    -- [3, 4, 7]

    print (fn 5 10 [50, 51, 54, 60, 65])
    -- [5, 6]
