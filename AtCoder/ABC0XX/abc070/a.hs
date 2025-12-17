-- https://atcoder.jp/contests/abc070/tasks/abc070_a

fn :: Int -> String
fn n =
    let x = n `div` 100 in
    let y = n `mod` 10 in

    if x == y then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn 575)
    -- Yes

    putStrLn (fn 123)
    -- No

    putStrLn (fn 812)
    -- No
