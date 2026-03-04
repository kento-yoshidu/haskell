import GHC.Generics (prec)
-- https://atcoder.jp/contests/abc142/tasks/abc142_a

fn :: Int -> Float
fn n =
    fromIntegral ((n + 1) `div` 2) / fromIntegral n

main :: IO ()
main = do
    print (fn 4)
    -- 0.5

    print (fn 5)
    -- 0.6

    print (fn 1)
    -- 1.0
