-- https://atcoder.jp/contests/abc134/tasks/abc134_a

fn :: Int -> Int
fn r =
    3 * r ^ 2

main :: IO ()
main = do
    print (fn 4)
    -- 48

    print (fn 15)
    -- 675

    print (fn 80)
    -- 19200
