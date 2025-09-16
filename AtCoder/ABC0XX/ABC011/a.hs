-- https://atcoder.jp/contests/abc011/tasks/abc011_1

fn :: Int -> Int
fn n =
    (n + 1) `rem` 12

main :: IO ()
main = do
    print (fn 1)
    -- 2

    print (fn 12)
    -- 1
