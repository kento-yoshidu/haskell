-- https://atcoder.jp/contests/abc390/tasks/abc390_a

fn :: [Int] -> String
fn xs
    | xs == [1..5] = "No"
    | any (\i -> swap i (i+1) xs == [1..5]) [0..3] = "Yes"
    | otherwise = "No"
  where
    swap i j ys =
        let vi = ys !! i
            vj = ys !! j
        in take i ys
        ++ [vj]
        ++ take (j-i-1) (drop (i+1) ys)
        ++ [vi]
        ++ drop (j+1) ys

main :: IO ()
main = do
    putStrLn (fn [1, 2, 4, 3, 5])
    -- Yes

    putStrLn (fn [5, 3, 2, 4, 1])
    -- No

    putStrLn (fn [1, 2, 3, 4, 5])
    -- No

    putStrLn (fn [2, 1, 3, 4, 5])
    -- Yes
