-- https://atcoder.jp/contests/abc087/tasks/abc087_a

fn :: Int -> Int -> Int -> Int
fn x a b =
    (x - a) `mod` b

main :: IO ()
main = do
    print (fn 1234 150 100)
    -- 84

    print (fn 1000 108 108)
    -- 28

    print (fn 579 123 456)
    -- 0

    print (fn 7477 549 593)
    -- 405
