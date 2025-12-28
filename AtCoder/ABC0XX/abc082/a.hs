-- https://atcoder.jp/contests/abc082/tasks/abc082_a

fn :: Int -> Int -> Int
fn a b =
    ceiling (fromIntegral (a + b) / 2)

main :: IO ()
main = do
    print (fn 1 3)
    -- 2

    print (fn 7 4)
    -- 6

    print (fn 5 5)
    -- 5
