-- https://atcoder.jp/contests/abc063/tasks/abc063_a

fn :: Int -> Int -> String
fn a b =
    let sum = a + b in

    if sum >= 10 then
        "error"
    else
        show sum

main :: IO ()
main = do
    putStrLn(fn 6 3)
    -- 9

    putStrLn(fn 6 4)
    -- error
