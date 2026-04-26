-- https://atcoder.jp/contests/abc441/tasks/abc441_a

fn :: Int -> Int -> Int -> Int -> String
fn p q x y
    | x < p || y < q || p+99 < x || q+99 < y = "No"
    | otherwise                              = "Yes"

main :: IO ()
main = do
    putStrLn (fn 3 3 5 10)
    -- Yes

    putStrLn (fn 5 5 10 1000)
    -- No

    putStrLn (fn 1 2 1 1)
    -- No
