-- https://atcoder.jp/contests/abc183/tasks/abc183_a

fn :: Int -> Int
fn = max 0

main :: IO ()
main = do
    print (fn 1)
    -- 1

    print (fn 0)
    -- 0

    print (fn (-1))
    -- 0
