-- https://atcoder.jp/contests/abc088/tasks/abc088_a

fn :: Int -> Int -> String
fn n a =
    let rest = n `mod` 500

    in if rest <= a then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn 2018 218)
    -- Yes

    putStrLn (fn 2763 0)
    -- No

    putStrLn (fn 37 514)
    -- Yes
