-- https://atcoder.jp/contests/abc138/tasks/abc138_a

fn :: Int -> String -> String
fn a s =
    if a >= 3200 then
        s
    else
        "red"

main :: IO ()
main = do
    putStrLn (fn 3200 "pink")
    -- pink

    putStrLn (fn 3199 "pink")
    -- red

    putStrLn (fn 4049 "red")
    -- red
