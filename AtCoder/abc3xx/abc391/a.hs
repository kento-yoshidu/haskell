-- https://atcoder.jp/contests/abc391/tasks/abc391_a

fn :: String -> String
fn "N"  = "S"
fn "S"  = "N"
fn "E"  = "W"
fn "W"  = "E"
fn "NE" = "SW"
fn "NW" = "SE"
fn "SE" = "NW"
fn "SW" = "NE"
fn _    = error "unreachable"

main :: IO ()
main = do
    putStrLn (fn "N")
    -- S

    putStrLn (fn "SE")
    -- NW
