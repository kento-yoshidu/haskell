-- https://atcoder.jp/contests/abc435/tasks/abc435_a

fn :: Int -> Int
fn n =
    foldl (\acc x -> acc + x) 0 [1 .. n]

main :: IO ()
main = do
    print (fn 5)
    -- 15

    print (fn 1)
    -- 1

    print (fn 29)
    -- 435
