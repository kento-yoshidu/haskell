-- https://atcoder.jp/contests/abc099/tasks/abc099_a

fn :: Int -> String
fn n =
    if n < 1000 then
        "ABC"
    else
        "ABD"

main :: IO ()
main = do
    putStrLn (fn 999)
    -- ABC

    putStrLn (fn 1000)
    -- ABD

    putStrLn (fn 1481)
    -- ABD
