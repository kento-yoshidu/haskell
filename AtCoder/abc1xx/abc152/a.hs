-- https://atcoder.jp/contests/abc152/tasks/abc152_a

fn :: Int -> Int -> String
fn n m =
    if n == m then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn 3 3)
    -- Yes

    putStrLn (fn 3 2)
    -- No

    putStrLn (fn 1 1)
    -- Yes
