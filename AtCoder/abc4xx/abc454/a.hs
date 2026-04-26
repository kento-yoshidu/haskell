-- https://atcoder.jp/contests/abc454/tasks/abc454_a

fn :: Int -> Int -> Int
fn l r =
    r - l + 1

main :: IO ()
main = do
    print (fn 3 5)
    -- 3

    print (fn 1 7)
    -- 7

    print (fn 14 79)
    -- 66
