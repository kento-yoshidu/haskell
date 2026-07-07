-- https://atcoder.jp/contests/abc153/tasks/abc153_a

fn :: Int -> Int -> Int
fn h a =
    (h + a - 1) `div` a

main :: IO ()
main = do
    print (fn 10 4)
    -- 3

    print (fn 1 10000)
    -- 1

    print (fn 10000 1)
    -- 10000
