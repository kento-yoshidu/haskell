-- https://atcoder.jp/contests/abc065/tasks/abc065_a

fn :: Int -> Int -> Int -> String
fn x a b =
    if a >= b then
        "delicious"
    else
        if b - a <= x then
            "safe"
        else
            "dangerous"

main :: IO ()
main = do
    putStrLn (fn 4 3 6)
    -- safe

    putStrLn (fn 6 5 1)
    -- delicious

    putStrLn (fn 3 7 12)
    -- dangerous
