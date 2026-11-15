-- https://atcoder.jp/contests/abc465/tasks/abc465_a

fn :: Int -> Int -> String
fn a b =
    if fromIntegral a > fromIntegral b * 2.0 / 3.0 then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn 316 465)
    -- Yes

    putStrLn (fn 101 248)
    -- No

    putStrLn (fn 666 999)
    -- No
