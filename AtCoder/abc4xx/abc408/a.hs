-- https://atcoder.jp/contests/abc408/tasks/abc408_a

fn :: Int -> Int -> [Int] -> String
fn n s t
    | head t > s = "No"
    | any (\(a, b) -> abs (b - a) > s) (zip t (tail (t))) = "No"
    | otherwise = "Yes"

main :: IO ()
main = do
    putStrLn (fn 5 10 [6, 11, 21, 22, 30])
    -- Yes

    putStrLn (fn 2 100 [1, 200])
    -- No

    putStrLn (fn 10 22 [47, 81, 82, 95, 117, 146, 165, 209, 212, 21])
    -- No
