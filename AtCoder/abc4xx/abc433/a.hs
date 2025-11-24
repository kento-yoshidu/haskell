-- https://atcoder.jp/contests/abc433/tasks/abc433_a

calc :: Int -> Int -> Int -> String
calc x y z =
    if y*z == x then
        "Yes"
    else if y*z > x then
        "No"
    else
        calc (x+1) (y+1) z

fn :: Int -> Int -> Int -> String
fn x y z =
    calc x y z

main :: IO ()
main = do
    putStrLn (fn 44 20 2)
    -- Yes

    putStrLn (fn 28 10 3)
    -- No

    putStrLn (fn 50 5 10)
    -- Yes

    putStrLn (fn 1 100 2)
    -- No
