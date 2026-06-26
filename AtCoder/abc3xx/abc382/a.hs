-- https://atcoder.jp/contests/abc382/tasks/abc382_a

fn :: Int -> Int -> String -> Int
fn n d s =
    d + length (filter (== '.') s)

main :: IO ()
main = do
    print (fn 5 2 ".@@.@")
    -- 4

    print (fn 3 3 "@@@")
    -- 3

    print (fn 10 4 "@@@.@@.@@.")
    -- 7
