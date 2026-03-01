-- https://atcoder.jp/contests/abc141/tasks/abc141_a

fn "Sunny" = "Cloudy"
fn "Cloudy" = "Rainy"
fn _ = "Sunny"

main :: IO ()
main = do
    putStrLn (fn "Sunny")
    -- Cloudy

    putStrLn (fn "Rainy")
    -- Sunny
