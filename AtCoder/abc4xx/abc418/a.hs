-- https://atcoder.jp/contests/abc418/tasks/abc418_a

fn :: Int -> String -> String
fn n s =
    let str = drop (n - 3) s

    in if str == "tea" then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn 8 "greentea")
    -- Yes

    putStrLn (fn 6 "coffee")
    -- No

    putStrLn (fn 3 "tea")
    -- Yes

    putStrLn (fn 1 "t")
    -- No
