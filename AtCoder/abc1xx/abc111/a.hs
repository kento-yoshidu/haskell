-- https://atcoder.jp/contests/abc111/tasks/abc111_a

fn :: Int -> Int
fn n =
    1110 - n

main :: IO ()
main = do
    print (fn 119)
    -- 991

    print (fn 999)
    -- 111
