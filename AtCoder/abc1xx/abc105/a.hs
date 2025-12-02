-- https://atcoder.jp/contests/abc105/tasks/abc105_a

fn :: Int -> Int -> Int
fn n k =
    if n `mod` k == 0 then
        0
    else
        1

main :: IO ()
main = do
    print (fn 7 3)
    -- 1

    print (fn 100 10)
    -- 0

    print (fn 1 1)
    -- 0
