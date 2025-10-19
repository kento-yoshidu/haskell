-- https://atcoder.jp/contests/abc067/tasks/abc067_a

fn :: Int -> Int -> String
fn a b =
    if a `mod` 3 == 0 || b `mod` 3 == 0 || (a + b) `mod` 3 == 0 then
        "Possible"
    else
        "Impossible"

main :: IO ()
main = do
    putStrLn (fn 4 5)
    -- Possible

    putStrLn (fn 1 1)
    -- Impossible
