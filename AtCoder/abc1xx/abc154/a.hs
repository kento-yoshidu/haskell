import GHC.Generics (prec)
-- https://atcoder.jp/contests/abc154/tasks/abc154_a

fn :: String -> String -> Int -> Int -> String -> (Int, Int)
fn s t a b u
    | u == "red" = (a - 1, b)
    | otherwise  = (a, b - 1)

main :: IO ()
main = do
    print (fn "red" "blue" 3 4 "red")
    -- (2, 4)

    print (fn "red" "blue" 5 5 "blue")
    -- (5, 4)
