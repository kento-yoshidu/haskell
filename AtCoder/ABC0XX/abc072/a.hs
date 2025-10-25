-- https://atcoder.jp/contests/abc072/tasks/abc072_a

fn :: Int -> Int -> Int
fn x t =
    max 0 (x - t)

main :: IO ()
main = do
    print (fn 100 17)
    -- 83

    print (fn 48 58)
    -- 0

    print (fn 1000000000 1000000000)
    -- 0
