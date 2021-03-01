arr = [1,2,3]

arr2 = arr.map {
  | i | i * 2
}

puts arr
#=> 1,2,3

puts arr2
#=> 2,4,6