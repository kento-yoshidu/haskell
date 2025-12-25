-- https://atcoder.jp/contests/abc078/tasks/abc078_a

fn :: Char -> Char -> Char
fn x y
    | x < y = '<'
    | x > y = '>'
    | otherwise = '='

main :: IO ()
main = do
    print (fn 'A' 'B')
    -- <

    print (fn 'E' 'C')
    -- >

    print (fn 'F' 'F')
    -- =
