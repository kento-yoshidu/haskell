-- https://atcoder.jp/contests/abc145/tasks/abc145_a

fn :: Int -> Int
fn r = r * r

main :: IO ()
main = do
    print (fn 2)
    -- 4

    print (fn 100)
    -- 10000
