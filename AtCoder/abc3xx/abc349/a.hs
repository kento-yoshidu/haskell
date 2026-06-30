-- https://atcoder.jp/contests/abc349/tasks/abc349_a

fn :: Int -> [Int] -> Int
fn _ = sum . map negate

main :: IO ()
main = do
    print (fn 4 [1, -2, -1])
    -- 2

    print (fn 3 [0, 0])
    -- 0

    print (fn 6 [10, 20, 30, 40, 50])
    -- -150
