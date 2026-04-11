-- https://atcoder.jp/contests/abc156/tasks/abc156_a

fn :: Int -> Int -> Int
fn n r
    | n >= 10   = r
    | otherwise = r + 100 * (10 - n)

main :: IO ()
main = do
    print (fn 2 2919)
    -- 3719

    print (fn 22 3051)
    -- 3051
