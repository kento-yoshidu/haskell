-- https://atcoder.jp/contests/abc352/tasks/abc352_a

fn :: Int -> Int -> Int -> Int -> String
fn n x y z
    | a < z && z < b = "Yes"
    | otherwise      = "No"
  where
    a = min x y
    b = max x y

main :: IO ()
main = do
    putStrLn (fn 7 6 1 3)
    -- Yes

    putStrLn (fn 10 3 2 9)
    -- No

    putStrLn (fn 100 23 67 45)
    -- Yes
