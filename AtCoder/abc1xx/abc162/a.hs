-- https://atcoder.jp/contests/abc162/tasks/abc162_a

fn :: Int -> String
fn n =
    let a = n `div` 100
        b = n `div` 10 `mod` 10
        c = n `mod` 10
    in if a == 7 || b == 7 || c == 7 then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn 117)
    -- Yes

    putStrLn (fn 123)
    -- No

    putStrLn (fn 777)
    -- Yes
