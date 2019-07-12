package main

import (
  "fmt"
  "numberfactory"
  "randomgenerator"
)

func main() {
  fmt.Println("Number Factory 🏭")
  var g randomgenerator.RandomGenerator = randomgenerator.Generator{}
  var nf = numberfactory.NumberFactory{C: []int{}, G: g}
  nf.A = nf.Random()
  nf.B = nf.Random()
  fmt.Printf("%d + %d = %d\n", nf.A, nf.B, nf.Add())
  fmt.Printf("%d - %d = %d\n", nf.A, nf.B, nf.Subtract())
  fmt.Printf("%d * %d = %d\n", nf.A, nf.B, nf.Multiply())
  fmt.Printf("%d / %d = %f\n", nf.A, nf.B, nf.Divide())
  fmt.Printf("%d ** 2 = %d\n", nf.A, nf.Square())
  fmt.Printf("My Numbers:")
  for i := 0; i < 10; i++ {
    t := nf.Random()
    nf.C = append(nf.C, t)
    fmt.Printf(" %d", t)
  }
  fmt.Printf("\n")
  fmt.Printf("Sum of My Numbers: %d\n", nf.Sum())
  fmt.Println("🏭  Number Factory shutting down...")
}
