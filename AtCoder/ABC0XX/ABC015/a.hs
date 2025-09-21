-- https://atcoder.jp/contests/abc015/tasks/abc015_1

fn :: String -> String -> String
fn a b =
    if length a >= length b then
        a
    else
        b

main :: IO ()
main = do
    print (fn "isuruu" "isleapyear")
    -- isleapyear

    print (fn "ttttiiiimmmmeeee" "time")
    -- ttttiiiimmmmeeee
