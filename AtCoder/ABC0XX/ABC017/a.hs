-- https://atcoder.jp/contests/abc017/tasks/abc017_1

fn :: [(Int, Int)] -> Int
fn se =
    sum (map (\(a, b) -> a * b) se) `div` 10

main :: IO ()
main = do
    print (fn [(50, 7), (40, 8), (30, 9)])
    -- 94

    print (fn [(990, 10), (990, 10), (990, 10)])
    -- 2970
