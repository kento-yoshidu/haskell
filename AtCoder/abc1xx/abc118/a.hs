-- https://atcoder.jp/contests/abc118/tasks/abc118_a

fn :: Int -> Int -> Int
fn a b
    | b `mod` a == 0 = a + b
    | otherwise = b - a

main :: IO ()
main = do
    print (fn 4 12)
    -- 16

    print (fn 8 20)
    -- 12

    print (fn 1 1)
    -- 2
