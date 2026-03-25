-- https://atcoder.jp/contests/abc122/tasks/abc122_a

fn :: Char -> Char
fn b =
    case b of
        'A' -> 'T'
        'T' -> 'A'
        'G' -> 'C'
        'C' -> 'G'
        _ -> error "unreachable"

main :: IO ()
main = do
    print (fn 'A')
    -- T

    print (fn 'G')
    -- C
