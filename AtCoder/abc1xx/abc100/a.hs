-- https://atcoder.jp/contests/abc432/tasks/abc432_a

fn :: Int -> Int -> String
fn a b =
    if a <= 8 && b <= 8 then
        "Yay!"
    else
        ":("

main :: IO ()
main = do
    putStrLn (fn 5 4)
    -- Yay!

    putStrLn (fn 8 8)
    -- Yay!

    putStrLn (fn 11 4)
    -- :(
