-- https://atcoder.jp/contests/abc150/tasks/abc150_a

fn :: Int -> Int -> String
fn k x
    | k * 500 >= x = "Yes"
    | otherwise    = "No"

main :: IO ()
main = do
    putStrLn (fn 2 900)
    -- Yes

    putStrLn (fn 1 501)
    -- No

    putStrLn (fn 4 2000)
    -- Yes
