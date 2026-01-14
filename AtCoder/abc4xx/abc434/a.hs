-- https://atcoder.jp/contests/abc434/tasks/abc434_a

fn :: Int -> Int -> Int
fn w b =
    w * 1000 `div` b + 1

main :: IO ()
main = do
    print (fn 80 5)
    -- 16001

    print (fn 70 6)
    -- 11667

    print (fn 100 100)
    -- 1001
