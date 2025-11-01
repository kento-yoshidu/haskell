-- https://atcoder.jp/contests/abc081/tasks/abc081_a

fn :: String -> Int
fn s =
    length (filter (== '1') s)

main :: IO ()
main = do
    print (fn "101")
    -- 2

    print (fn "000")
    -- 0
