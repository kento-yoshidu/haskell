-- https://atcoder.jp/contests/abc041/tasks/abc041_a

fn :: String -> Int -> Char
fn s i =
    s !! (i - 1)

main :: IO ()
main = do
    print(fn "atcoder" 3)
    -- c

    print(fn "beginner" 1)
    -- b

    print(fn "contest" 7)
    -- t

    print(fn "z" 1)
    -- z
