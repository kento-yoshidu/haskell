-- https://atcoder.jp/contests/abc107/tasks/abc107_a

fn :: Int -> Int -> Int
fn n i =
    n - i + 1

main :: IO ()
main = do
    print (fn 4 2)
    -- 3

    print (fn 1 1)
    -- 1

    print (fn 15 11)
    -- 5
