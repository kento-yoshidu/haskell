-- https://atcoder.jp/contests/abc043/tasks/abc043_a

calc :: Int -> Int -> Int
calc n sum =
    if n == 0 then
        sum
    else
        calc (n - 1) (sum + n)

fn :: Int -> Int
fn n =
    calc n 0

main :: IO ()
main = do
    print(fn 3)
    -- 6

    print(fn 10)
    -- 55

    print(1)
    -- 1
