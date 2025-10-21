-- https://atcoder.jp/contests/abc068/tasks/abc068_a

fn :: Int -> String
fn n =
    "ABC" ++ show n

main :: IO ()
main = do
    putStrLn (fn 100)
    -- ABC100

    putStrLn (fn 425)
    -- ABC425

    putStrLn (fn 999)
    -- ABC999
