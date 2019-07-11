package number_factory


type NumberFactory struct {
    a, b int
}

func (n NumberFactory) Add() int {
    return n.a + n.b
}

func (n NumberFactory) Subtract() int {
    return n.a - n.b
}

func (n NumberFactory) Multiply() int {
    return n.a * n.b
}
