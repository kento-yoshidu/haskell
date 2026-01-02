-- https://atcoder.jp/contests/abc405/tasks/abc405_a

fn :: Int -> Int -> String
fn r x
    | x == 1 && 1600 <= r && r <= 2999 = "Yes"
    | x == 2 && 1200 <= r && r <= 2399 = "Yes"
    | otherwise = "No"

main :: IO ()
main = do
    putStrLn (fn 2000 1)
    -- Yes

    putStrLn (fn 1000 1)
    -- No

    putStrLn (fn 1500 2)
    -- Yes

    putStrLn (fn 2800 2)
    -- No
