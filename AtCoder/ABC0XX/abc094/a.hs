-- https://atcoder.jp/contests/abc094/tasks/abc094_a

fn :: Int -> Int -> Int -> String
fn a b x =
    if a > x || a + b < x then
        "NO"
    else
        "YES"

main :: IO ()
main = do
    putStrLn (fn 3 5 4)
    -- YES

    putStrLn (fn 2 2 6)
    -- NO

    putStrLn (fn 5 3 2)
    -- NO
