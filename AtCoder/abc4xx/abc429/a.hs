-- https://atcoder.jp/contests/abc429/tasks/abc429_a

fn :: Int -> Int -> [String]
fn n m =
    [ if i <= m then "OK" else "Too Many Requests" | i <- [1 .. n] ]

main :: IO ()
main = do
    print (fn 5 3)
    -- ["OK","OK","OK","Too Many Requests","Too Many Requests"]

    print (fn 3 5)
    -- ["OK","OK","OK"]
