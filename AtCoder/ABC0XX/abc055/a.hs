-- https://atcoder.jp/contests/abc055/tasks/abc055_a

fn :: Int -> Int
fn n =
    n * 800 - (n `div` 15) * 200

main :: IO ()
main = do
    print(fn 20)
    -- 15800

    print(fn 60)
    -- 47200
