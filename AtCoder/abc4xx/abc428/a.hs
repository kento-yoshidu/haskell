-- https://atcoder.jp/contests/abc428/tasks/abc428_a

fn :: Int -> Int -> Int -> Int -> Int
fn s a b x =
    let rem = x `mod` (a + b)
        sum = x `div` (a + b) * a * s
    in sum + (min a rem) * s

main :: IO ()
main = do
    print (fn 7 3 2 11)
    -- 49

    print (fn 6 3 2 9)
    -- 36

    print (fn 1 1 666 428)
    -- 1
