-- https://atcoder.jp/contests/abc147/tasks/abc147_a

fn :: Int -> Int -> Int -> String
fn a b c =
    if a + b + c >= 22 then
        "bust"
    else
        "win"

main :: IO ()
main = do
    putStrLn (fn 5 7 9)
    -- win

    putStrLn (fn 13 7 2)
    -- bust
