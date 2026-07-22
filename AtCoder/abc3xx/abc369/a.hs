-- https://atcoder.jp/contests/abc369/tasks/abc369_a

fn :: Int -> Int -> Int
fn a b
    | a == b             = 1
    | even (abs (b - a)) = 3
    | otherwise          = 2

main :: IO ()
main = do
    print (fn 5 7)
    -- 3

    print (fn 6 1)
    -- 2

    print (fn 3 3)
    -- 1
