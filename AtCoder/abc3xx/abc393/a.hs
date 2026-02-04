-- https://atcoder.jp/contests/abc393/tasks/abc393_a

fn :: String -> String -> Int
fn "sick" "sick" = 1
fn "sick" "fine" = 2
fn "fine" "sick" = 3
fn _      _      = 4

main :: IO ()
main = do
    print (fn "sick" "fine")
    -- 2

    print (fn "fine" "fine")
    -- 4
