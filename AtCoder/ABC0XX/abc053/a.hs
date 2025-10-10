-- https://atcoder.jp/contests/abc053/tasks/abc053_a

fn :: Int -> String
fn x =
    if x < 1200 then
        "ABC"
    else
        "ARC"

main :: IO ()
main = do
    putStrLn(fn 1000)
    -- ABC

    putStrLn(fn 2000)
    -- ARC
