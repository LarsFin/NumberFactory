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

func (n NumberFactory) Divide() float64 {
    return float64(n.a) / float64(n.b)
}

func (n NumberFactory) Square() int {
    return 0
}
