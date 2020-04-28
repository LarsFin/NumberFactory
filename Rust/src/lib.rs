pub mod number_factory {

    pub fn add(_a: i32, _b: i32) -> i32 {

        return _a + _b;
    }

    pub fn sub(_a: i32, _b: i32) -> i32 {

        return 0;
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
}
