-- https://atcoder.jp/contests/abc420/tasks/abc420_a

fn :: Int -> Int -> Int
fn x y =
    if x + y == 24 then
        12
    else
        (x + y) `rem` 12

main :: IO ()
main = do
    print (fn 5 9)
    -- 2

    print (fn 1 1)
    -- 2

    print (fn 12 12)
    -- 12
