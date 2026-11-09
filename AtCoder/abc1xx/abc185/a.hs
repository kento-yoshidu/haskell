-- https://atcoder.jp/contests/abc185/tasks/abc185_a

fn :: Int -> Int -> Int -> Int -> Int
fn a b c d = minimum [a, b, c, d]

main :: IO ()
main = do
    print (fn 5 3 7 11)
    -- 3

    print (fn 100 100 1 100)
    -- 1
