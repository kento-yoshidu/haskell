-- https://atcoder.jp/contests/abc038/tasks/abc038_a

fn :: String -> String
fn s =
    if last s == 'T' then
        "YES"
    else
        "NO"

main :: IO ()
main = do
    putStrLn(fn "ICEDT")
    -- YES

    putStrLn(fn "MUGICHA")
    -- NO

    putStrLn(fn "OOLONGT")
    -- YES

    putStrLn(fn "T")
    -- YES

    putStrLn(fn "TEA")
    -- NO
