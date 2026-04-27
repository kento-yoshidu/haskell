-- https://atcoder.jp/contests/abc442/tasks/abc442_a

fn :: String -> Int
fn s =
    length $ filter (\c -> c == 'i' || c == 'j') s

main :: IO ()
main = do
    print (fn "aiiaj")
    -- 3

    print (fn "abcedfgh")
    -- 0

    print (fn "jjjjjj")
    -- 6
