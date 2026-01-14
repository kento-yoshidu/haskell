-- https://atcoder.jp/contests/abc424/tasks/abc424_a

fn :: Int -> Int -> Int -> String
fn a b c
    | a == b || b == c || a == c = "Yes"
    | otherwise = "No"

main :: IO ()
main = do
    putStrLn (fn 4 2 4)
    -- Yes

    putStrLn (fn 3 4 5)
    -- No

    putStrLn (fn 10 10 10)
    -- Yes
