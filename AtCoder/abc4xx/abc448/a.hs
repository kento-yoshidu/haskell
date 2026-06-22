import GHC.Generics (prec)
-- https://atcoder.jp/contests/abc448/tasks/abc448_a

fn :: Int -> Int -> [Int] -> [Int]
fn n cur [] = []
fn n cur (a:as)
    | a < cur = 1   : fn n a as
    | otherwise = 0 : fn n cur as

main :: IO()
main = do
    print (fn 5 10 [6, 4, 7, 1, 3])
    -- [1, 1, 0, 1, 0]

    print (fn 1 1 [1])
    -- [1]

    print (fn 8 20 [9, 19, 14, 17, 17, 4, 18, 4])
    -- [1, 0, 0, 0, 0, 1, 0, 0]
