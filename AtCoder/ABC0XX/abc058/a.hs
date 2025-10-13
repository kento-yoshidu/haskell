-- https://atcoder.jp/contests/abc058/tasks/abc058_a

fn :: Int -> Int -> Int -> String
fn a b c =
    if abs (a - b) == abs (b - c) then
        "YES"
    else
        "NO"

main :: IO ()
main = do
    putStrLn(fn 2 4 6)
    -- YES

    putStrLn(fn 2 5 6)
    -- NO

    putStrLn(fn 3 2 1)
    -- YES
