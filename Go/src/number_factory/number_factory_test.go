package number_factory

import (
	"testing"
  "github.com/stretchr/testify/assert"
)

const a, b int = 8, 6
var arr = []int{ 3, 5, 7, 9, 11 }
var n NumberFactory = NumberFactory{a, b, arr}

func TestAdd(t *testing.T) {
	actual := n.Add()
  expected := 14

  assert.Equal(t, expected, actual, "Should be equal")
}

func TestSubtract(t *testing.T) {
	actual := n.Subtract()
  expected := 2

  assert.Equal(t, expected, actual, "Should be equal")
}

func TestMultiply(t *testing.T) {
	actual := n.Multiply()
  expected := 48

  assert.Equal(t, expected, actual, "Should be equal")
}

func TestDivide(t *testing.T) {
	actual := n.Divide()
  expected := 1.3333333333333333

  assert.Equal(t, expected, actual, "Should be equal")
}

func TestSquare(t *testing.T) {
  actual := n.Square()
  expected := 64

  assert.Equal(t, expected, actual, "Should be equal")
}

func TestSum(t *testing.T) {
  actual := n.Sum()
  expected := 35

  assert.Equal(t, expected, actual, "Should be equal")
}
