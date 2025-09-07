-- https://atcoder.jp/contests/abc016/tasks/abc016_1

fn :: Int -> Int -> String
fn m d =
    if m `mod` d == 0 then
        "YES"
    else
        "NO"

main :: IO ()
main = do
    print (fn 1 1)
    -- YES

    print (fn 2 29)
    -- NO

    print (fn 12 6)
    -- YES
