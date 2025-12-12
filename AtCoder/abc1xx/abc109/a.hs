-- https://atcoder.jp/contests/abc109/tasks/abc109_a

fn :: Int -> Int -> String
fn a b =
    if odd(a * b) then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn 3 1)
    -- Yes

    putStrLn (fn 1 2)
    -- No

    putStrLn (fn 2 2)
    -- No

