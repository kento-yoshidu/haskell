-- https://atcoder.jp/contests/abc425/tasks/abc425_a

fn :: Int -> Int
fn n =
        sum [ sign i * i^3 | i <- [1..n]]
    where
        sign i = if even i then 1 else -1

main :: IO ()
main = do
    print (fn 3)
    -- -20

    print (fn 9)
    -- -425

    print (fn 10)
    -- 575
