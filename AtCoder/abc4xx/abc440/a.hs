-- https://atcoder.jp/contests/abc440/tasks/abc440_a

fn :: Int -> Int -> Int
fn x y =
    x * 2 ^ y

main :: IO ()
main = do
    print (fn 110 2)
    -- 440

    print (fn 233 3)
    -- 1864

    print (fn 432 1)
    -- 864
