pub mod number_factory {

    pub fn add(_a: i32, _b: i32) -> i32 {

        return _a + _b;
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
}
