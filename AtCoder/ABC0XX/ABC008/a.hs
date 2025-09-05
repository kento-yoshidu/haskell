-- https://atcoder.jp/contests/abc008/tasks/abc008_1

fn :: Int -> Int -> Int
fn s t =
    t - s + 1

main :: IO ()
main = do
    print (fn 4 7)
    -- 4

    print (fn 1 1)
    -- 1
