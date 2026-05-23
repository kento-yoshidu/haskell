-- https://atcoder.jp/contests/abc135/tasks/abc135_a

fn :: Int -> Int -> String
fn a b
    | even (a + b) = show ((a + b) `div` 2)
    | otherwise    = "IMPOSSIBLE"

main :: IO ()
main = do
    putStrLn (fn 2 16)
    -- 9

    putStrLn (fn 0 3)
    -- IMPOSSIBLE

    putStrLn (fn 998244353 99824435)
    -- 549034394
