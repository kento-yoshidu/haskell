-- https://atcoder.jp/contests/abc387/tasks/abc387_a

fn :: Int -> Int -> Int
fn a b =
    (a + b) ^ 2

main :: IO ()
main = do
    print (fn 20 25)
    -- 2025

    print (fn 30 25)
    -- 3025

    print (fn 45 11)
    -- 3136

    print (fn 2025 1111)
    -- 9834496
