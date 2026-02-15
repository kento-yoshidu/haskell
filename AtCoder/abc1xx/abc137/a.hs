-- https://atcoder.jp/contests/abc137/tasks/abc137_a

fn :: Int -> Int -> Int
fn a b =
    max (a + b) (max (a - b) (a * b))

main :: IO ()
main = do
    print (fn (-13) 3)
    -- -10

    print (fn 1 (-33))
    -- 34

    print (fn 13 3)
    -- 39
