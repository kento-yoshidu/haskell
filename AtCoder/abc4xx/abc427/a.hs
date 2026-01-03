-- https://atcoder.jp/contests/abc427/tasks/abc427_a

fn :: String -> String
fn s =
    let mid = length s `div` 2
    in take mid s ++ drop (mid + 1) s

main :: IO ()
main = do
    putStrLn (fn "ABCDE")
    -- ABDE

    putStrLn (fn "OOO")
    -- OO

    putStrLn (fn "ATCODER")
    -- ATCDER
