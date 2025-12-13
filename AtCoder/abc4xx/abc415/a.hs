-- https://atcoder.jp/contests/abc415/tasks/abc415_a

fn :: Int -> [Int] -> Int -> String
fn n a x =
    if x `elem` a then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn 5 [3, 1, 4, 1, 5] 4)
    -- Yes

    putStrLn (fn 4 [100, 100, 100, 100] 100)
    -- Yes

    putStrLn (fn 6 [2, 3, 5, 7, 11, 13] 1)
    -- No
