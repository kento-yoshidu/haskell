-- https://atcoder.jp/contests/abc062/tasks/abc062_a

grp :: Int -> Int
grp n
    | n `elem` [1, 3, 5, 7, 8, 10, 12] = 1
    | n == 2 = 2
    | otherwise = 3

fn :: Int -> Int -> String
fn x y =
    let a = grp x in
    let b = grp y in

    if a == b then
        "YES"
    else
        "NO"

main :: IO ()
main = do
    putStrLn(fn 1 3)
    -- Yes

    putStrLn(fn 2 4)
    -- No
