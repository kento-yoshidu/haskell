-- https://atcoder.jp/contests/abc143/tasks/abc143_a

fn :: Int -> Int -> Int
fn a b =
    max 0 (a - b * 2)

main :: IO ()
main = do
    print (fn 12 4)
    -- 4

    print (fn 20 15)
    -- 0

    print (fn 20 30)
    -- 0
