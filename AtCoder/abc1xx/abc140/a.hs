-- https://atcoder.jp/contests/abc140/tasks/abc140_a

fn :: Int -> Int
fn n =
    n ^ 3

main :: IO ()
main = do
    print (fn 2)
    -- 8

    print (fn 1)
    -- 1
