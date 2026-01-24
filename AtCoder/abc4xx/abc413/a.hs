-- https://atcoder.jp/contests/abc413/tasks/abc413_a

fn :: Int -> Int -> [Int] -> String
fn n m a
    | m >= sum a = "Yes"
    | otherwise = "No"

main :: IO ()
main = do
    putStrLn (fn 5 15 [3, 1, 4, 1, 5])
    -- Yes

    putStrLn (fn 5 5 [3, 1, 4, 1, 5])
    -- No

    putStrLn (fn 1 10000 [100])
    -- Yes
