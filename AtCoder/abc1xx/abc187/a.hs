-- https://atcoder.jp/contests/abc187/tasks/abc187_a

fn :: Int -> Int -> Int
fn a b =
    max (digitSum a) (digitSum b)
  where
    digitSum n = n `div` 100 + (n `mod` 100 `div` 10) + n `mod` 10

main :: IO ()
main = do
    print (fn 123 234)
    -- 9

    print (fn 593 953)
    -- 17

    print (fn 100 999)
    -- 27
