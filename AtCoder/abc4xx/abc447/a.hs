-- https://atcoder.jp/contests/abc447/tasks/abc447_a

fn :: Int -> Int -> String
fn n m =
    if (n + 1) `div` 2 >= m then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn 6 3)
    -- Yes

    putStrLn (fn 4 3)
    -- No

    putStrLn (fn 5 3)
    -- Yes

    putStrLn (fn 44 7)
    -- Yes
