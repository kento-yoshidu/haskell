-- https://atcoder.jp/contests/abc435/tasks/abc435_b

fn :: Int -> [Int] -> Int
fn n a =
    let cumSum = scanl (+) 0 a
        sum l r = cumSum !! (r+1) - cumSum !! l
        ok l r =
            let s = sum l r
            in all (\k -> s `mod` (a !! k) /= 0) [l..r]
    in length [() | i <- [0..n-1], j <- [i+1..n-1], ok i j]

main :: IO ()
main = do
    print (fn 5 [8, 6, 10, 5, 7])
    -- 6

    print (fn 3 [1, 1, 1])
    -- 0
