-- https://atcoder.jp/contests/abc399/tasks/abc399_a

fn :: Int -> String -> String -> Int
fn n s t =
    length $ filter (\(a, b) -> a /= b) (zip s t)

main :: IO ()
main = do
    print(fn 6 "abcarc" "agcahc")
    -- 2

    print(fn 7 "atcoder" "contest")
    -- 7

    print(fn 8 "chokudai" "chokudai")
    -- 0

    print(fn 10 "vexknuampx" "vzxikuamlx")
    -- 4
