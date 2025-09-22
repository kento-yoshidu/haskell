-- https://atcoder.jp/contests/abc034/tasks/abc034_a

fn :: Int -> Int -> String
fn x y =
    if x < y then
        "Better"
    else
        "Worse"

main :: IO ()
main = do
    putStrLn(fn 12 34)
    -- Better

    putStrLn(fn 98 56)
    -- Worse
