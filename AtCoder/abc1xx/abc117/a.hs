-- https://atcoder.jp/contests/abc117/tasks/abc117_a

fn :: Int -> Int -> Float
fn t x =
    fromIntegral t / fromIntegral x

main :: IO ()
main = do
    print (fn 8 3)
    -- 2.6666667

    print (fn 99 1)
    -- 99.0000000

    print (fn 1 100)
    -- 0.1000000
