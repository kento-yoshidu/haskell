-- https://atcoder.jp/contests/abc064/tasks/abc064_a

fn :: Int -> Int -> Int -> String
fn r g b =
    if rem (r*100 + g*10 + b) 4 == 0 then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn 4 3 2)
    -- Yes

    putStrLn (fn 2 3 4)
    -- No
