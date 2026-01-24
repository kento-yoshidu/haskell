-- https://atcoder.jp/contests/abc127/tasks/abc127_a

fn :: Int -> Int -> Int
fn a b
    | a <= 5    = 0
    | a <= 12   = b `div` 2
    | otherwise = b

main :: IO ()
main = do
    print (fn 30 100)
    -- 100

    print (fn 12 100)
    -- 50

    print (fn 0 100)
    -- 0
