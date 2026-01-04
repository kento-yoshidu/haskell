-- https://atcoder.jp/contests/abc090/tasks/abc090_a

fn :: [String] -> String
fn [a, b, c] = [a !! 0, b !! 1, c !! 2]

main :: IO ()
main = do
    putStrLn (fn ["ant", "obe", "rec"])
    -- abc

    putStrLn (fn ["edu", "cat", "ion"])
    -- ean
