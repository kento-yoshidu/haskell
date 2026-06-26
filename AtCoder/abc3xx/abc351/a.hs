-- https://atcoder.jp/contests/abc351/tasks/abc351_a

fn :: [Int] -> [Int] -> Int
fn a b = sum a - sum b + 1

main :: IO ()
main = do
    print (fn [0, 1, 0, 1, 2, 2, 0, 0, 1] [1, 1, 0, 0, 0, 0, 1, 0])
    -- 5

    print (fn [0, 0, 0, 0, 0, 0, 0, 0, 0] [0, 0, 0, 0, 0, 0, 0, 0])
    -- 1
