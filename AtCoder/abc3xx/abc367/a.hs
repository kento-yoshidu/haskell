-- https://atcoder.jp/contests/abc367/tasks/abc367_a

fn :: Int -> Int -> Int -> String
fn a b c
    | b < c = if b < a && a < c then "No" else "Yes"
    | c < a && a < b = "No"
    | otherwise = "Yes"

main :: IO ()
main = do
    putStrLn (fn 21 8 14)
    -- Yes

    putStrLn (fn 0 21 7)
    -- No

    putStrLn (fn 10 7 17)
    -- No
