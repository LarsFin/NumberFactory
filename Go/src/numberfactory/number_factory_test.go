package numberfactory

import (
	"testing"
  "randomgenerator"

  "github.com/golang/mock/gomock"
  "github.com/stretchr/testify/assert"
)

const a, b = 8, 6
var arr = []int{ 3, 5, 7, 9, 11 }
var n NumberAssessor = NumberFactory{A: a, B: b, C: arr}

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

func TestRandomGenerateCalled(t *testing.T) {
  ctrl := gomock.NewController(t)
  defer ctrl.Finish()

  mock := randomgenerator.NewMockRandomGenerator(ctrl)

  mock.
    EXPECT().
    RandomGenerate(gomock.Eq(101)).
    Return(0)

  n = NumberFactory{G: mock}
  n.Random()
}

func TestRandomReturn(t *testing.T) {
  expected := 50
  ctrl := gomock.NewController(t)
  defer ctrl.Finish()

  mock := randomgenerator.NewMockRandomGenerator(ctrl)

  mock.
    EXPECT().
    RandomGenerate(gomock.Eq(101)).
    Return(expected)

  n = NumberFactory{G: mock}
  actual := n.Random()

  assert.Equal(t, expected, actual, "Should be equal")
}
