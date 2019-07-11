package number_factory

import (
	"testing"
  "github.com/stretchr/testify/assert"
)

const a, b int = 8, 6
var n NumberFactory = NumberFactory{a, b}

func TestAdd(t *testing.T) {
	actual := n.Add()
  expected := 14

  assert.Equal(t, expected, actual, "Should be equal")
}
