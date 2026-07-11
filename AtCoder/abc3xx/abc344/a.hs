-- https://atcoder.jp/contests/abc344/tasks/abc344_a

fn :: String -> String
fn s = a ++ c
  where
    (a, rest) = break (== '|') s
    c         = drop 1 (dropWhile (/= '|') (drop 1 rest))

main :: IO ()
main = do
    putStrLn (fn "atcoder|beginner|contest")
    -- atcodercontest

    putStrLn (fn "|spoiler|")
    --

    putStrLn (fn "||xyz")
    -- xyz
