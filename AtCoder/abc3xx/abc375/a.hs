-- https://atcoder.jp/contests/abc375/tasks/abc375_a

fn :: Int -> String -> Int
fn _ (a:b:c:xs)
    | a == '#' && b == '.' && c == '#' = 1 + fn 0 (b:c:xs)
    | otherwise                        = fn 0 (b:c:xs)
fn _ _ = 0

main :: IO ()
main = do
    print (fn 6 "#.##.#")
    -- 2

    print (fn 1 "#")
    -- 0

    print (fn 9 "##.#.#.##")
    -- 3
