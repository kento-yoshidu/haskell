-- https://atcoder.jp/contests/abc417/tasks/abc417_a

fn :: Int -> Int -> Int -> String -> String
fn n a b s =
    let end = n - b - 1
    in take (end - a + 1) (drop a s)

main :: IO ()
main = do
    putStrLn (fn 7 1 3 "atcoder")
    -- tco

    putStrLn (fn 1 0 0 "a")
    -- a

    putStrLn (fn 20 4 8 "abcdefghijklmnopqrst")
    -- efghijkl
