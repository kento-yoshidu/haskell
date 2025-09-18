-- https://atcoder.jp/contests/abc028/tasks/abc028_a

fn :: Int -> String
fn n
    | n == 100 = "Perfect"
    | n >= 90 = "Great"
    | n >= 60 = "Good"
    | otherwise = "Bad"

main :: IO ()
main = do
    print(fn 80)
    -- Good

    print(fn 100)
    -- Perfect

    print(fn 59)
    -- Bad

    print(fn 95)
    -- Great
