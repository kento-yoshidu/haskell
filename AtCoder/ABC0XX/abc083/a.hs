-- https://atcoder.jp/contests/abc083/tasks/abc083_a

fn :: Int -> Int -> Int -> Int -> String
fn a b c d =
    let left = a + b
        right = c + d

    in if left > right then
        "Left"
    else if left < right then
        "Right"
    else
        "Balance"

main :: IO ()
main = do
    putStrLn (fn 3 8 7 1)
    -- Left

    putStrLn (fn 3 4 5 2)
    -- Balance

    putStrLn (fn 1 7 6 4)
    -- Right
