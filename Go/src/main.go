package main

import (
  "fmt"
  "numberfactory"
  "randomgenerator"
)

func main() {
  const a, b = 2, 5
  var arr = []int{2, 4, 6}
  var generator randomgenerator.RandomGenerator = randomgenerator.Generator{}
  var n = numberfactory.NumberFactory{a, b, arr, generator}
  fmt.Printf("%d\n", n.Random())
}
