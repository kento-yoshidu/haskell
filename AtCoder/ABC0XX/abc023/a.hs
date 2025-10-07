-- https://atcoder.jp/contests/abc023/tasks/abc023_a

fn :: Int -> Int
fn x =
    x `div` 10 + x `rem` 10

main :: IO ()
main = do
    print(fn 23)
    -- 5

    print(fn 70)
    -- 7

    print(fn 99)
    -- 18
