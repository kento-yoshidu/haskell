-- https://atcoder.jp/contests/abc048/tasks/abc048_a

fn :: String -> String -> String -> String
fn _a b _c =
    "A" ++ [head b] ++ "C"

main :: IO ()
main = do
    putStrLn(fn "AtCoder" "Beginner" "Contest")
    -- ABC

    putStrLn(fn "AtCoder" "Snuke" "Contest")
    -- ASC

    putStrLn(fn "AtCoder" "X" "Contest")
    -- AXC
