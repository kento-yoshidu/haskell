-- https://atcoder.jp/contests/abc035/tasks/abc035_a

fn :: Int -> Int -> String
fn w h =
    if w*3 == h*4 then
        "4:3"
    else
        "16:9"

main :: IO ()
main = do
    putStrLn(fn 4 3)
    -- 4:3

    putStrLn(fn 16 9)
    -- 16:9

    putStrLn(fn 28 21)
    -- 4:3
