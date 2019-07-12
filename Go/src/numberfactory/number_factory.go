package numberfactory


/*
NumberFactory struct
A (int): The initial int for arithmetic, also used for square()
B (int): The second int to be applied in relation to the arithmetic to A
C ([]int): A slice of ints which are used to determine total value through sum()
*/
type NumberFactory struct {
    A, B int
    C []int
}

/*
Add func
n (NumberFactory): Function receiver
return (int): value of combined members 'A' and 'B' of n
*/
func (n NumberFactory) Add() int {
    return n.A + n.B
}

/*
Subtract func
n (NumberFactory): Function receiver
return (int): value of 'A' minus 'B', 'A' and 'B' are members of n
*/
func (n NumberFactory) Subtract() int {
    return n.A - n.B
}

/*
Multiply func
n (NumberFactory): Function receiver
return (int): product of members 'A' and 'B' of n
*/
func (n NumberFactory) Multiply() int {
    return n.A * n.B
}

/*
Divide func
n (NumberFactory): Function receiver
return (int): value of 'A' divided by 'B', 'A' and 'B' are members of n
*/
func (n NumberFactory) Divide() float64 {
    return float64(n.A) / float64(n.B)
}

/*
Square func
n (NumberFactory): Function receiver
return (int): value of n's member 'A' squared
*/
func (n NumberFactory) Square() int {
    return n.A * n.A
}

/*
Sum func
n (NumberFactory): Function receiver
return (int): the sum of all int values within the array member 'C' of n
*/
func (n NumberFactory) Sum() int {
    sum := 0
    for i := 0; i < len(n.C); i++ {
        sum += n.C[i]
    }
    return sum
}
