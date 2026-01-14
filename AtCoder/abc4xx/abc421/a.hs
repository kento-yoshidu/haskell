-- https://atcoder.jp/contests/abc421/tasks/abc421_a

fn :: Int -> [String] -> Int -> String -> String
fn n s x y =
    if s !! (x-1) == y then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn 3 ["sato", "suzuki", "takahashi"] 3 "takahashi")
    -- Yes

    putStrLn (fn 3 ["sato", "suzuki", "takahashi"] 1 "aoki")
    -- No

    putStrLn (fn 2 ["smith", "smith"] 1 "smith")
    -- Yes

    putStrLn (fn 2 ["wang", "li"] 2 "wang")
    -- No
