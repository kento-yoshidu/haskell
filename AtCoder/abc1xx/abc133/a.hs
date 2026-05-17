-- https://atcoder.jp/contests/abc133/tasks/abc133_a

fn :: Int -> Int -> Int -> Int
fn n a b =
    min (n * a) b

main :: IO ()
main = do
    print (fn 4 2 9)
    -- 8

    print (fn 4 2 7)
    -- 7

    print (fn 4 2 8)
    -- 8
