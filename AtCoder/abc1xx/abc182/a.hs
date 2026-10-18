-- https://atcoder.jp/contests/abc182/tasks/abc182_a

fn :: Int -> Int -> Int
fn a b =
    a * 2 + 100 - b

main :: IO ()
main = do
    print (fn 200 300)
    -- 200

    print (fn 10000 0)
    -- 20100
