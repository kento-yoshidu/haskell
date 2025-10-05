-- https://atcoder.jp/contests/abc045/tasks/abc045_a

fn :: Int -> Int -> Int -> Int
fn a b h =
    (a + b) * h `div` 2

main :: IO ()
main = do
    print(fn 3 4 2)
    -- 7

    print(fn 4 4 4)
    -- 16
