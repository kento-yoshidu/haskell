-- https://atcoder.jp/contests/abc091/tasks/abc091_a

fn :: Int -> Int -> Int -> String
fn a b c =
    if a + b >= c then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn 50 100 120)
    -- Yes

    putStrLn (fn 500 100 1000)
    -- No

    putStrLn (fn 19 123 143)
    -- No

    putStrLn (fn 19 123 142)
    -- Yes
