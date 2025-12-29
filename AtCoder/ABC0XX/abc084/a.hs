-- https://atcoder.jp/contests/abc084/tasks/abc084_a

fn :: Int -> Int
fn m =
    (24 - m) + 24

main :: IO ()
main = do
    print (fn 21)
    -- 27

    print (fn 12)
    -- 36
