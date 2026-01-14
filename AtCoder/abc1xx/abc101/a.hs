-- https://atcoder.jp/contests/abc101/tasks/abc101_a

fn :: String -> Int
fn s =
    sum (map toVal s)
  where
    toVal '+' = 1
    toVal '-' = -1

main :: IO ()
main = do
    print (fn "+-++")
    -- 2

    print (fn "-+--")
    -- -2

    print (fn "----")
    -- -4
