-- https://atcoder.jp/contests/abc397/tasks/abc397_a

fn :: Float -> Int
fn x
    | x >= 38.0 = 1
    | x >= 37.5 = 2
    | otherwise = 3

main :: IO ()
main = do
    print (fn 40.0)
    -- 1

    print (fn 37.7)
    -- 2

    print (fn 36.6)
    -- 3
