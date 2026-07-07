-- https://atcoder.jp/contests/abc452/tasks/abc452_a

fn :: Int -> Int -> String
fn m d
    | (m, d) `elem` x = "Yes"
    | otherwise       = "No"
  where
    x = [(1, 7), (3, 3), (5, 5), (7, 7), (9, 9)]

main :: IO ()
main = do
    putStrLn (fn 3 3)
    -- Yes

    putStrLn (fn 1 1)
    -- No

    putStrLn (fn 4 4)
    -- No

    putStrLn (fn 11 7)
    -- No
