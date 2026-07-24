-- https://atcoder.jp/contests/abc366/tasks/abc366_a

fn :: Int -> Int -> Int -> String
fn n t a
    | any (>= half) [t, a] = "Yes"
    | otherwise            = "No"
  where
    half = (n + 1) `div` 2

main :: IO ()
main = do
    putStrLn (fn 7 4 2)
    -- Yes

    putStrLn (fn 99 12 48)
    -- No

    putStrLn (fn 1 0 0)
    -- No
