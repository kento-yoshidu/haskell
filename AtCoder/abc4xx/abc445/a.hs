-- https://atcoder.jp/contests/abc445/tasks/abc445_a

fn :: String -> String
fn s =
    if s !! 0 == s !! ((length s) - 1) then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn "luminol")
    -- Yes

    putStrLn (fn "rule")
    -- No
