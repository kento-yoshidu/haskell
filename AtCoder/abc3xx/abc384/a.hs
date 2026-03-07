-- https://atcoder.jp/contests/abc384/tasks/abc384_a

fn :: Int -> Char -> Char -> String -> String
fn n c1 c2 =
    map (\c -> if c == c1 then c else c2)

main :: IO ()
main = do
    putStrLn (fn 3 'b' 'g' "abc")
    -- agc

    putStrLn (fn 1 's' 'h' "s")
    -- s

    putStrLn (fn 7 'd' 'a' "atcoder")
    -- aaaadaa

    putStrLn (fn 10 'b' 'a' "acaabcabba")
    -- aaaabaabba
