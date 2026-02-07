-- https://atcoder.jp/contests/abc115/tasks/abc115_a

fn :: Int -> String
fn n = case n of
    25 -> "Christmas"
    24 -> "Christmas Eve"
    23 -> "Christmas Eve Eve"
    22 -> "Christmas Eve Eve Eve"
    _  -> error "Out of range"

main :: IO ()
main = do
    putStrLn (fn 25)
    -- Christmas

    putStrLn (fn 22)
    -- Christmas Eve Eve Eve
