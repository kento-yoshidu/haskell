-- https://atcoder.jp/contests/abc076/tasks/abc076_a

fn :: Int -> Int -> Int
fn r g =
    (g - r) + g

main :: IO ()
main = do
    print (fn 2002 2017)
    -- 2032

    print (fn 4500 0)
    -- -4500
