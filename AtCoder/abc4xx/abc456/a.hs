-- https://atcoder.jp/contests/abc456/tasks/abc456_a

fn :: Int -> String
fn x =
    if 3 <= x && x <= 18 then
        "Yes"
    else
        "No"

main :: IO ()
main = do
    putStrLn (fn 15)
    -- Yes

    putStrLn (fn 2)
    -- No
