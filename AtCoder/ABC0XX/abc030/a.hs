-- https://atcoder.jp/contests/abc030/tasks/abc030_a

fn :: Float -> Float -> Float -> Float -> String
fn a b c d =
    let takahashi = b / a
        aoki = d / c
    in
        if takahashi == aoki then
            "DraW"
        else if takahashi > aoki then
            "TAKAHASHI"
        else
            "AOKI"

main :: IO ()
main = do
    putStrLn(fn 5 2 6 3)
    -- AOKI

    putStrLn(fn 100 80 100 73)
    -- TAKAHASHI

    putStrLn(fn 66 30 55 25)
    -- DRAW
