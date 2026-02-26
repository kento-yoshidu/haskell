-- https://atcoder.jp/contests/abc407/tasks/abc407_a

fn :: Int -> Int -> Int
fn a b =
    (a + b `div` 2) `div` b

main :: IO()
main = do
    print (fn 4 7)
    -- 1

    print (fn 407 29)
    -- 14

    print (fn 22 11)
    -- 2
