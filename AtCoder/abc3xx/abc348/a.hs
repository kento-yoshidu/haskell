-- https://atcoder.jp/contests/abc348/tasks/abc348_a

fn :: Int -> String
fn n =
    map (\i -> if i `mod` 3 == 0 then 'x' else 'o') [1..n]

main :: IO ()
main = do
    putStrLn (fn 7)
    -- ooxooxo

    putStrLn (fn 9)
    -- ooxooxoox
