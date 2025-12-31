-- https://atcoder.jp/contests/abc086/tasks/abc086_a

fn :: Int -> Int -> String
fn a b =
    if a * b `mod` 2 == 0 then
        "Even"
    else
        "Odd"

main :: IO ()
main = do
    putStrLn (fn 3 4)
    -- Even

    putStrLn (fn 1 21)
    -- Odd
