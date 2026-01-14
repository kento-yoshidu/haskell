-- https://atcoder.jp/contests/abc098/tasks/abc098_a

fn :: Int -> Int -> Int
fn a b =
    maximum [a + b, a - b, a * b]

main :: IO ()
main = do
    print (fn 3 1)
    -- 4

    print (fn 4 (-2))
    -- 6

    print (fn 0 0)
    -- 0
