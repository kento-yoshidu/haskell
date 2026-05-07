-- https://atcoder.jp/contests/abc130/tasks/abc130_a

fn :: Int -> Int -> Int
fn x a
    | x < a     = 0
    | otherwise = 10

main :: IO ()
main = do
    print (fn 3 5)
    -- 0

    print (fn 7 5)
    -- 10

    print (fn 6 6)
    -- 10
