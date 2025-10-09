-- https://atcoder.jp/contests/abc050/tasks/abc050_a

fn :: Int -> Char -> Int -> Int
fn a op b =
    case op of
        '+' -> a + b
        '-' -> a - b
        _ -> error "unreachable"

main :: IO ()
main = do
    print(fn 1 '+' 2)
    -- 3

    print(fn 5 '-' 7)
    -- -2
