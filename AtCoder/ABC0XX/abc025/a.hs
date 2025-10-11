-- https://atcoder.jp/contests/abc025/tasks/abc025_a

fn :: String -> Int -> String
fn s n =
    let v = s
        i1 = (n - 1) `div` 5
        i2 = (n - 1) `mod` 5
    in [v !! i1, v !! i2]

main :: IO ()
main = do
    print (fn "abcde" 8)
    -- bc

    print (fn "aeiou" 22)
    -- ue

    print (fn "vwxyz" 25)
    -- zz
