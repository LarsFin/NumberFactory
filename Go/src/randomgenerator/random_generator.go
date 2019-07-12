package randomgenerator

import (
  "math/rand"
  "time"
)

/*
RandomGenerator interface
Contains the signatures of functions which should be implemented within any
RandomGenerator typed variable
*/
type RandomGenerator interface {
  RandomGenerate(mx int) int
}

/*
Generator struct
Mx (int): The maximum bound for random numbers generated
*/
type Generator struct {}

/*
RandomGenerate func
g (Generator): Function receiver
return (int): returns a random int from 0 to 'Mx' which is the max bound int
member of g
*/
func (g Generator) RandomGenerate(mx int) int {
  rand.Seed(time.Now().UTC().UnixNano())
  return rand.Intn(mx)
}
