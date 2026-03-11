-- https://atcoder.jp/contests/abc144/tasks/abc144_a

fn :: Int -> Int -> Int
fn a b
    | a <= 9 && b <= 9 = a * b
    | otherwise        = -1

main :: IO ()
main = do
    print (fn 2 5)
    -- 10

    print (fn 5 10)
    -- -1

    print (fn 9 9)
    -- 81
