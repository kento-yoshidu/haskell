-- https://atcoder.jp/contests/abc097/tasks/abc097_a

fn :: Int -> Int -> Int -> Int -> String
fn a b c d =
    if abs(a - c) <= d || abs(a - b) <= d && abs(b - c) <= d then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn 4 7 9 3)
    -- Yes

    putStrLn (fn 100 10 1 2)
    -- No

    putStrLn (fn 10 10 10 1)
    -- Yes

    putStrLn (fn 1 100 2 10)
    -- Yes
