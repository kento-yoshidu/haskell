-- https://atcoder.jp/contests/abc149/tasks/abc149_a

fn :: String -> String -> String
fn s t =
    t ++ s

main :: IO ()
main = do
    putStrLn (fn "oder" "atc")
    -- atcoder

    putStrLn (fn "humu" "humu")
    -- humuhumu
