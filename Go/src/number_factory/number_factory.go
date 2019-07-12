package number_factory


type NumberFactory struct {
    A, B int
    C []int
}

func (n NumberFactory) Add() int {
    return n.A + n.B
}

func (n NumberFactory) Subtract() int {
    return n.A - n.B
}

func (n NumberFactory) Multiply() int {
    return n.A * n.B
}

func (n NumberFactory) Divide() float64 {
    return float64(n.A) / float64(n.B)
}

func (n NumberFactory) Square() int {
    return n.A * n.A
}

func (n NumberFactory) Sum() int {
    sum := 0
    for i := 0; i < len(n.C); i++ {
        sum += n.C[i]
    }
    return sum
}
