-- https://atcoder.jp/contests/abc406/tasks/abc406_a

fn :: Int -> Int -> Int -> Int -> String
fn a b c d =
    if a * 60 + b > c * 60 + d then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn 22 40 22 30)
    -- Yes

    putStrLn (fn 22 40 22 45)
    -- No

    putStrLn (fn 12 0 11 30)
    -- Yes
