package number_factory


type NumberFactory struct {
    a, b int
}

func (n *NumberFactory) Add() int {
    return n.a + n.b
}
