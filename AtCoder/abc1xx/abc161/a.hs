-- https://atcoder.jp/contests/abc161/tasks/abc161_a

fn :: Int -> Int -> Int -> (Int, Int, Int)
fn a b c =
    (c, a, b)

main :: IO ()
main = do
    print (fn 1 2 3)
    -- (3, 1, 2)

    print (fn 100 100 100)
    -- (100, 100, 100)

    print (fn 41 59 31)
    -- (31, 41, 59)
