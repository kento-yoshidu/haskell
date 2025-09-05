-- https://atcoder.jp/contests/abc010/tasks/abc010_1

fn :: String -> String
fn s =
    s ++ "pp"

main :: IO ()
main = do
    print (fn "chokudai")
    -- chokudaipp

    print (fn "sanagi")
    -- sanagipp
