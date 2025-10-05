-- https://atcoder.jp/contests/abc021/tasks/abc021_a

fn :: Int -> [Int]
fn n = n : replicate n 1

main :: IO ()
main = do
    print(fn 5)
    -- [5, 1, 1, 1, 1, 1]

    print(fn 1)
    -- [1, 1]
