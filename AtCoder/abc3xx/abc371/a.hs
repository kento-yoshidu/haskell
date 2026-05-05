-- 

fn :: Char -> Char -> Char -> Char
fn ab ac bc
    | ab == ac && ac == bc = 'B'
    | ab == ac && ac /= bc = 'C'
    | otherwise = 'A'

main :: IO ()
main = do
    print (fn '<' '<' '<')
    -- B

    print (fn '<' '<' '>')
    -- C
