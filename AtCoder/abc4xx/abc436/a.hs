-- https://atcoder.jp/contests/abc436/tasks/abc436_a

fn :: Int -> String -> String
fn n s =
    replicate (n - length s) 'o' ++ s

main :: IO ()
main = do
    putStrLn (fn 5 "abc")
    -- ooabc

    putStrLn (fn 2 "o")
    -- oo

    putStrLn (fn 12 "vgxgpuam")
    -- oooovgxgpuam
