-- https://atcoder.jp/contests/abc054/tasks/abc054_a

fn :: Int -> Int -> String
fn a b =
    if a == b then
        "Draw"
    else if a == 1 then
        "Alice"
    else if b == 1 then
        "Bob"
    else if a > b then
        "Alice"
    else
        "Bob"

main :: IO ()
main = do
    putStrLn(fn 8 6)
    -- Alice

    putStrLn(fn 1 1)
    -- Draw

    putStrLn(fn 13 1)
    -- Bob
