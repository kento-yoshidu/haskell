-- https://atcoder.jp/contests/abc139/tasks/abc139_a

fn :: String -> String -> Int
fn s t =
    length $ filter (\(a, b) -> a == b) (zip s t)

main :: IO ()
main = do
    print (fn "CSS" "CSR")
    -- 2

    print (fn "SSR" "SSR")
    -- 3

    print (fn "RRR" "SSS")
    -- 0
