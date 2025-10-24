-- https://atcoder.jp/contests/abc071/tasks/abc071_a

fn :: Int -> Int -> Int -> String
fn x a b =
    let aAbs = abs (x - a) in
    let bAbs = abs (x - b) in

    if aAbs > bAbs then
        "A"
    else
        "B"

main :: IO ()
main = do
    putStrLn (fn 5 2 7)
    -- B

    putStrLn (fn 1 999 1000)
    -- A
