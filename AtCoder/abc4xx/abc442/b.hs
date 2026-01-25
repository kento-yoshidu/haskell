-- https://atcoder.jp/contests/abc442/tasks/abc442_b

fn :: Int -> [Int] -> [String]
fn q a =
    map judge $
    tail $
    scanl step (0, False) a
    where
        step (v, b) x =
            case x of
                1 -> (v+1, b)
                2 -> (if v >= 1 then v - 1 else v, b)
                3 -> (v, not b)

        judge (v, b) =
            if b && v >= 3 then "Yes" else "No"

main :: IO ()
main = do
    print (fn 10 [2, 1, 3, 1, 3, 1, 1, 3, 2, 2])
    -- ["No","No","No","No","No","No","No","Yes","Yes","No"]
