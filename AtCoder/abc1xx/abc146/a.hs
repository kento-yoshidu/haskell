-- https://atcoder.jp/contests/abc146/tasks/abc146_a

fn :: String -> Int
fn "SAT"     = 1
fn "FRI"     = 2
fn "THU"     = 3
fn "WED"     = 4
fn "TUE"     = 5
fn "MON"     = 6
fn otherwise = 7

main :: IO ()
main = do
    print (fn "SAT")
    -- 1

    print (fn "SUN")
    -- 7
