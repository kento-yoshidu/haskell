-- https://atcoder.jp/contests/abc426/tasks/abc426_a

fn :: String -> String -> String
fn x y =
    case (x, y) of
        (x, y) | x == y       -> "Yes"
        ("Ocelot", _)         -> "No"
        ("Serval", "Ocelot")  -> "Yes"
        ("Serval", _)         -> "No"
        ("Lynx", _)           -> "Yes"
        _                     -> error "unreachable"

main :: IO ()
main = do
    putStrLn (fn "Serval" "Ocelot")
    -- Yes

    putStrLn (fn "Serval" "Lynx")
    -- No

    putStrLn (fn "Ocelot" "Ocelot")
    -- Yes
