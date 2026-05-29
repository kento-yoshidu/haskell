-- https://atcoder.jp/contests/abc136/tasks/abc136_a

fn :: Int -> Int -> Int -> Int
fn a b c =
    max 0 (c - (a - b))

main :: IO ()
main = do
    print (fn 6 4 3)
    -- 1

    print (fn 8 3 9)
    -- 4

    print (fn 12 3 7)
    -- 0
