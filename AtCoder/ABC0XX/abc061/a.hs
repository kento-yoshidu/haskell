-- https://atcoder.jp/contests/abc061/tasks/abc061_a

fn :: Int -> Int -> Int -> String
fn a b c
    | a <= c && c <= b = "Yes"
    | otherwise = "No"

main :: IO ()
main = do
    putStrLn(fn 1 3 2)
    -- YES

    putStrLn(fn 6 5 4)
    -- NO

    putStrLn(fn 2 2 2)
    -- YES
