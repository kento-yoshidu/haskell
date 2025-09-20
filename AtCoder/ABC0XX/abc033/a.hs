-- https://atcoder.jp/contests/abc033/tasks/abc033_a

fn :: Int -> String
fn n =
    if n `mod` 1111 == 0 then
        "SAME"
    else
        "DIFFERENT"

main :: IO ()
main = do
    putStrLn(fn 2222)
    -- SAME

    putStrLn(fn 1221)
    -- DIFFERENT

    putStrLn(fn 0000)
    -- SAME
