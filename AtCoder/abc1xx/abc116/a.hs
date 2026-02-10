-- https://atcoder.jp/contests/abc116/tasks/abc116_a

fn :: Int -> Int -> Int -> Int
fn ab bc ca =
    ab * bc `div` 2

main :: IO ()
main = do
    print (fn 3 4 5)
    --6

    print (fn 5 12 13)
    -- 30

    print (fn 45 28 53)
    -- 630
