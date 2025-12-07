-- https://atcoder.jp/contests/abc060/tasks/abc060_a

fn :: String -> String -> String -> String
fn a b c
    | last a == head b && last b == head c = "YES"
    | otherwise = "NO"

main :: IO ()
main = do
    putStrLn(fn "rng" "gorilla" "apple")
    -- YES

    putStrLn(fn "yakiniku" "unagi" "sushi")
    -- NO

    putStrLn(fn "a" "a" "a")
    -- YES

    putStrLn(fn "aaaaaaaaab" "aaaaaaaaaa" "aaaaaaaaab")
    -- NO
