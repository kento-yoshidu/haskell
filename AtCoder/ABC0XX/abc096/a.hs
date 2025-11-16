-- https://atcoder.jp/contests/abc096/tasks/abc096_a

fn :: Int -> Int -> Int
fn a b =
    if a <= b then
        a
    else
        a - 1

main :: IO ()
main = do
    print (fn 5 5)
    -- 5

    print (fn 2 1)
    -- 1

    print (fn 11 30)
    -- 11
