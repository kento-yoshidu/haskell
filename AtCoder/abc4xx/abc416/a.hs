-- https://atcoder.jp/contests/abc416/tasks/abc416_a

fn :: Int -> Int -> Int -> String -> String
fn n l r s =
    if all (== 'o') (drop (l-1) (take r s)) then
        "Yes"
    else
        "No"

main:: IO ()
main = do
    putStrLn (fn 10 6 8 "xoxxooooxo")
    -- Yes

    putStrLn (fn 9 6 8 "xoxxoxoox")
    -- No
