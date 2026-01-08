-- https://atcoder.jp/contests/abc123/tasks/abc123_a

fn :: Int -> Int -> Int -> Int -> Int -> Int -> String
fn a b c d e k =
    let arr = [a, b, c, d, e]
        x = minimum arr
        y = maximum arr
    in if y - x <= k then
        "Yay!"
    else
        ":("

main :: IO ()
main = do
    putStrLn (fn 1 2 4 8 9 15)
    -- Yay!

    putStrLn (fn 15 18 26 35 36 18)
    -- :(
