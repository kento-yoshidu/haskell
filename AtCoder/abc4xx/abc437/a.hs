-- https://atcoder.jp/contests/abc437/tasks/abc437_a

fn :: Int -> Int -> Int
fn a b =
    a * 12 + b

main :: IO ()
main = do
    print (fn 6 7)
    -- 79

    print (fn 4 11)
    -- 59

    print (fn 8 0)
    -- 96
