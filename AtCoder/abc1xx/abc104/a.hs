-- https://atcoder.jp/contests/abc104/tasks/abc104_a

fn :: Int -> String
fn r
    | r < 1200 = "ABC"
    | r < 2800 = "ARC"
    | otherwise = "AGC"

main :: IO ()
main = do
    putStrLn (fn 1199)
    -- ABC

    putStrLn (fn 1200)
    -- ARC

    putStrLn (fn 4208)
    -- AGC
