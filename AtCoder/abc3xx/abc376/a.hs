-- https://atcoder.jp/contests/abc376/tasks/abc376_a

fn :: Int -> Int -> [Int] -> Int
fn n c (x:xs) =
    snd $ foldl step (x, 1) xs
  where
    step (cur, ans) next
        | next - cur >= c = (next, ans + 1)
        | otherwise       = (cur, ans)

main :: IO ()
main = do
    print (fn 6 5 [1, 3, 7, 8, 10, 12])
    -- 3

    print (fn 3 2 [0, 2, 4])
    -- 3

    print (fn 10 3 [0, 3, 4, 6, 9, 12, 15, 17, 19, 20])
    -- 7
