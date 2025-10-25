-- https://atcoder.jp/contests/abc073/tasks/abc073_a

fn :: Int -> String
fn n =
    if n `div` 10 == 9 || n `mod` 10 == 9 then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn 29)
    -- Yes

    putStrLn (fn 72)
    -- No

    putStrLn (fn 91)
    -- Yes
