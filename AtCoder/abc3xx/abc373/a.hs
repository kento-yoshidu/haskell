-- https://atcoder.jp/contests/abc373/tasks/abc373_a

fn :: [String] -> Int
fn s =
    length $ filter (\(i, str) -> length str == i + 1 ) (zip [0..] s)

main :: IO ()
main = do
    print (fn ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"])
    -- 1

    print (fn ["ve", "inrtfa", "npccxva", "djiq", "lmbkktngaovl", "mlfiv", "fmbvcmuxuwggfq", "qgmtwxmb", "jii", "ts", "bfxrvs", "eqvy"])
    -- 2
