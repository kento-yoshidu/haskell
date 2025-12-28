-- https://atcoder.jp/contests/abc438/tasks/abc438_a

fn :: Int -> Int -> Int
fn d f =
    7 - (d - f) `mod` 7

main :: IO ()
main = do
    print (fn 365 4)
    -- 3

    print (fn 10 5)
    -- 2
