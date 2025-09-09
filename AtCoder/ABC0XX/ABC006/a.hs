-- https://atcoder.jp/contests/abc006/tasks/abc006_1

fn :: Int -> String
fn n =
    if n `mod` 3 == 0
        then "YES"
        else "NO"

main :: IO ()
main = do
    print (fn 2)
    -- NO

    print (fn 9)
    -- YES

    print (fn 3)
    -- YES
