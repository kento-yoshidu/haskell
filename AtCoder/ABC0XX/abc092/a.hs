-- https://atcoder.jp/contests/abc092/tasks/abc092_a

fn :: Int -> Int -> Int -> Int -> Int
fn a b c d =
    (min a b) + (min c d)

main :: IO ()
main = do
    print (fn 600 300 220 420)
    -- 520

    print (fn 555 555 400 200)
    -- 755

    print (fn 549 817 715 603)
    -- 1152
