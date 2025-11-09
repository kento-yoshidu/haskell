-- https://atcoder.jp/contests/abc089/tasks/abc089_a

fn :: Int -> Int
fn n = n `div` 3

main :: IO ()
main = do
    print (fn 8)
    -- 2

    print (fn 2)
    -- 0

    print (fn 9)
    -- 3
