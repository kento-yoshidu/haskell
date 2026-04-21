-- https://atcoder.jp/contests/abc398/tasks/abc398_a

fn :: Int -> String
fn n
    | odd n     = d ++ "=" ++ d
    | otherwise = d' ++ "==" ++ d'
    where
        d = replicate (n `div` 2) '-'
        d' = replicate (n `div` 2 - 1) '-'

main :: IO ()
main = do
    putStrLn (fn 4)
    -- -==-

    putStrLn (fn 7)
    -- ---=---
