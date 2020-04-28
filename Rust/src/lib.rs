pub mod number_factory {

    pub fn add(_a: i32, _b: i32) -> i32 {

        _a + _b
    }

    pub fn sub(_a: i32, _b: i32) -> i32 {

        _a - _b
    }

    pub fn mult(_a: i32, _b: i32) -> i32 {

        _a * _b
    }

    pub fn div(_a: i32, _b: i32) -> f64 {

        f64::from(_a) / f64::from(_b)
    }

    pub fn sqr(_n: i32) -> i32 {

        _n * _n
    }
}

// NumberFactory Unit Tests

#[cfg(test)]
mod tests {

    use crate::number_factory as number_factory;

    #[test]
    fn it_adds_two_integers() {

        let (a, b, _expected) = (4, 6, 10);
        let _result = number_factory::add(a, b);
        assert_eq!(_result, _expected);
    }

    #[test]
    fn it_subtracts_two_integers() {

        let (a, b, _expected) = (10, 2, 8);
        let _result = number_factory::sub(a, b);
        assert_eq!(_result, _expected);
    }

    #[test]
    fn it_multiplies_two_integers() {

        let (a, b, _expected) = (5, 7, 35);
        let _result = number_factory::mult(a, b);
        assert_eq!(_result, _expected);
    }

    #[test]
    fn it_divides_two_integers() {

        let (a, b, _expected) = (9, 4, 2.25);
        let _result = number_factory::div(a, b);
        assert_eq!(_result, _expected);
    }

    #[test]
    fn it_squarres_an_integer() {

        let (n, _expected) = (7, 49);
        let _result = number_factory::sqr(n);
        assert_eq!(_result, _expected);
    }
}
