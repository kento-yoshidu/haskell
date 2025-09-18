-- https://atcoder.jp/contests/abc012/tasks/abc012_1

fn :: Int -> Int -> (Int, Int)
fn a b =
    (b, a)

main :: IO ()
main = do
    print (fn 1 2)
    -- (2, 1)

    print (fn 5 5)
    -- (5, 5)
