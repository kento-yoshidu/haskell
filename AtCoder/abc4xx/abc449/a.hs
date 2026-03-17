-- https://atcoder.jp/contests/abc449/tasks/abc449_a

fn :: Int -> Float
fn d =
    let r = fromIntegral d / 2.0
    in r * r * pi

main :: IO ()
main = do
    print (fn 2)
    -- 3.1415927

    print (fn 7)
    -- 38.484512

    print (fn 98)
    -- 7542.9644
