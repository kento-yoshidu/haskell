-- https://atcoder.jp/contests/abc400/tasks/abc400_a

fn :: Int -> Int
fn a =
    if 400 `rem` a == 0 then
        400 `div` a
    else
        -1

main :: IO ()
main = do
    print (fn 10)
    -- 40

    print (fn 11)
    -- -1

    print (fn 400)
    -- 1
