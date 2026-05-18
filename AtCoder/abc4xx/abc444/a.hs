-- https://atcoder.jp/contests/abc444/tasks/abc444_a

fn :: Int -> String
fn n =
    let a = n `div` 100
        b = n `mod` 100 `div` 10
        c = n `mod` 10
    in if a == b && b == c then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn 444)
    -- Yes

    putStrLn (fn 160)
    -- No

    putStrLn (fn 999)
    -- Yes
