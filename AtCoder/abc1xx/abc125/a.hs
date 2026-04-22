-- https://atcoder.jp/contests/abc125/tasks/abc125_a

fn :: Int -> Int -> Int -> Int
fn a b t =
    t `div` a * b

main :: IO ()
main = do
    print (fn 3 5 7)
    -- 10

    print (fn 3 2 9)
    -- 6

    print (fn 20 20 19)
    -- 0
