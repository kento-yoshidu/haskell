-- https://atcoder.jp/contests/abc102/tasks/abc102_a

fn :: Int -> Int
fn n =
    if n `mod` 2 == 0 then
        n
    else
        n * 2

main :: IO ()
main = do
    print (fn 3)
    -- 6

    print (fn 10)
    -- 10

    print (fn 999999999)
    -- 1999999998
