-- https://atcoder.jp/contests/abc049/tasks/abc049_a

fn :: Char -> String
fn 'a' = "vowel"
fn 'i' = "vowel"
fn 'u' = "vowel"
fn 'e' = "vowel"
fn 'o' = "vowel"
fn _ = "consonant"

main :: IO ()
main = do
    putStrLn(fn 'a')
    -- vowel

    putStrLn(fn 'z')
    -- consonant

    putStrLn(fn 's')
    -- consonant
