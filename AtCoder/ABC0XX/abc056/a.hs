-- https://atcoder.jp/contests/abc056/tasks/abc056_a

fn :: Char -> Char -> Char
fn a b =
    if a == 'H' then
        b
    else if b == 'H' then
        'D'
    else
        'H'

main :: IO ()
main = do
    print(fn 'H' 'H')
    -- H

    print(fn 'D' 'H')
    -- D

    print(fn 'D' 'D')
    -- H
