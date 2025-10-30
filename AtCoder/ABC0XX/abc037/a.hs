-- https://atcoder.jp/contests/abc037/tasks/abc037_a

fn :: Int -> Int -> Int -> Int
fn a b c =
    c `div` min a b

main :: IO ()
main = do
    print(fn 3 5 6)
    -- 2

    print(fn 8 6 20)
    -- 3
