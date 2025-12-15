-- https://atcoder.jp/contests/abc112/tasks/abc112_a

fn :: Int -> Maybe [Int] -> String
fn 1 _ = "Hello World"
fn _ (Just ab) = show (sum ab)

main :: IO ()
main = do
    putStrLn (fn 1 Nothing)
    -- Hello World

    putStrLn (fn 2 (Just [3, 5]))
    -- 8
