-- https://atcoder.jp/contests/abc455/tasks/abc455_a

fn :: Int -> Int -> Int -> String
fn a b c =
    if (not (a == b)) && (b == c) then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn 4 5 5)
    -- Yes

    putStrLn (fn 1 3 7)
    -- No

    putStrLn (fn 6 6 6)
    -- No
