-- https://atcoder.jp/contests/abc409/tasks/abc409_a

fn :: Int -> String -> String -> String
fn n t a =
    if any (\(x, y) -> (x, y) == ('o', 'o')) (zip t a) then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn 4 "oxoo" "xoox")
    -- Yes

    putStrLn (fn 5 "xxxxx" "ooooo")
    -- No

    putStrLn (fn 10 "xoooxoxxxo" "ooxooooxoo")
    -- Yes
