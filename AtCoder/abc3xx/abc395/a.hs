-- https://atcoder.jp/contests/abc395/tasks/abc395_a

fn :: Int -> [Int] -> String
fn _ (x:y:xs)
    | x < y     = fn 0 (y:xs)
    | otherwise = "No"
fn _ _          = "Yes"

main :: IO ()
main = do
    putStrLn (fn 3 [1, 2, 5])
    -- Yes

    putStrLn (fn 3 [3, 9, 5])
    -- No

    putStrLn (fn 10 [1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    -- No
