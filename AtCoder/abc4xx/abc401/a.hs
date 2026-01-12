-- https://atcoder.jp/contests/abc401/tasks/abc401_a

fn :: Int -> String
fn s =
    if 200 <= s && s <= 299 then
        "Success"
    else
        "Failure"

main :: IO ()
main = do
    putStrLn (fn 200)
    -- Success

    putStrLn (fn 401)
    -- Failure

    putStrLn (fn 999)
    -- Failure
