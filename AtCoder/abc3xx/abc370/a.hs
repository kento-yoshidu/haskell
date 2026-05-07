-- https://atcoder.jp/contests/abc370/tasks/abc370_a

fn :: Int -> Int -> String
fn l r
    | l == r    = "Invalid"
    | l == 1    = "Yes"
    | otherwise = "No"

main :: IO ()
main = do
    putStrLn (fn 1 0)
    -- Yes

    putStrLn (fn 1 1)
    -- Invalid
