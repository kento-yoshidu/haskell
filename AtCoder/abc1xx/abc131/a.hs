-- https://atcoder.jp/contests/abc131/tasks/abc131_a

fn :: String -> String
fn (x:y:xs)
    | x == y    =   "Bad"
    | otherwise = fn (y:xs)
fn _ =   "Good"

main :: IO ()
main = do
    putStrLn (fn "3776")
    -- Bad

    putStrLn (fn "8080")
    -- Good

    putStrLn (fn "1333")
    -- Bad

    putStrLn (fn "0024")
    -- Bad

