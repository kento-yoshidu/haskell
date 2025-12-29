-- https://atcoder.jp/contests/abc430/tasks/abc430_a

fn :: Int -> Int -> Int -> Int -> String
fn a b c d =
    if c >= a && d < b then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn 10 20 30 40)
    -- No

    putStrLn (fn 10 20 30 4)
    -- Yes

    putStrLn (fn 100 100 1 1)
    -- No
