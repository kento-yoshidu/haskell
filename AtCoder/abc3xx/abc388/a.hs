-- https://atcoder.jp/contests/abc388/tasks/abc388_a

fn :: String -> String
fn (x:_) = [x] ++ "UPC"

main :: IO ()
main = do
    putStrLn (fn "Kyoto")
    -- KUPC

    putStrLn (fn "Tohoku")
    -- TUPC
