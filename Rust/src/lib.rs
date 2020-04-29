pub mod operations {

    use crate::random as random;

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

    pub fn sum(_numbers: &[i32]) -> i32 {

        let mut sum = 0;

        for _num in _numbers.iter() {

            sum += _num;
        }

        sum
    }

    pub fn rnd(_rng: impl random::RandomGenerator) -> i32 {

        _rng.gen(1, 101)
    }
}

pub mod random {

    use mockall::*;
    use mockall::predicate::*;

    use rand::Rng;

    #[automock]
    pub trait RandomGenerator {

        fn gen(&self, min: i32, max: i32) -> i32;
    }

    pub struct Random { }

    impl RandomGenerator for Random {

        fn gen(&self, min: i32, max: i32) -> i32 {

            let mut rng = rand::thread_rng();
            rng.gen_range(min, max)
        }
    }
}

// NumberFactory Unit Tests

#[cfg(test)]
mod tests {

    use crate::operations as operations;
    use crate::random as random;

    use mockall::predicate::*;

    #[test]
    fn it_adds_two_integers() {

        let (a, b, _expected) = (4, 6, 10);
        let _result = operations::add(a, b);
        assert_eq!(_result, _expected);
    }

    #[test]
    fn it_subtracts_two_integers() {

        let (a, b, _expected) = (10, 2, 8);
        let _result = operations::sub(a, b);
        assert_eq!(_result, _expected);
    }

    #[test]
    fn it_multiplies_two_integers() {

        let (a, b, _expected) = (5, 7, 35);
        let _result = operations::mult(a, b);
        assert_eq!(_result, _expected);
    }

    #[test]
    fn it_divides_two_integers() {

        let (a, b, _expected) = (9, 4, 2.25);
        let _result = operations::div(a, b);
        assert_eq!(_result, _expected);
    }

    #[test]
    fn it_squarres_an_integer() {

        let (n, _expected) = (7, 49);
        let _result = operations::sqr(n);
        assert_eq!(_result, _expected);
    }

    #[test]
    fn it_sums_integers_in_array() {

        let numbers: [i32; 3] = [1, 6, 9];
        let _expected = 16;
        let _result = operations::sum(&numbers);
        assert_eq!(_result, _expected);
    }

    #[test]
    fn it_generates_random_number() {

        let _expected = 10;
        let mut mock = random::MockRandomGenerator::new();
        mock.expect_gen()
            .with(eq(1), eq(101))
            .times(1)
            .returning(move |_mn, _mx| _expected);

        assert_eq!(operations::rnd(mock), _expected);
    }
}
