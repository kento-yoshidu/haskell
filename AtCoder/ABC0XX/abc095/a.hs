-- https://atcoder.jp/contests/abc095/tasks/abc095_a

fn :: String -> Int
fn s =
    let count = length $ filter (\c -> c == 'o') s

    in 700 + count * 100

main :: IO ()
main = do
    print (fn "oxo")
    -- 900

    print (fn "ooo")
    -- 1000

    print (fn "xxx")
    -- 700
