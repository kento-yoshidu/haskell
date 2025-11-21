-- https://atcoder.jp/contests/abc051/tasks/abc051_a

fn :: String -> String
fn s =
    map (\c -> if c == ',' then ' ' else c) s

main :: IO ()
main = do
    putStrLn(fn "happy,newyear,enjoy")
    -- happy newyear enjoy

    putStrLn(fn "haiku,atcoder,tasks")
    -- haiku atcoder tasks

    putStrLn(fn "abcde,fghihgf,edcba")
    -- abcde fghihgf edcba
