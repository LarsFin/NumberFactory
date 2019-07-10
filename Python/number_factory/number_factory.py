import sys


class NumberFactory:
    def add(self, int_a, int_b):
        self._validate_int(int_a)
        self._validate_int(int_b)
        return int_a + int_b

    def subtract(self, int_a, int_b):
        self._validate_int(int_a)
        self._validate_int(int_b)
        return int_a - int_b

    def multiply(self, int_a, int_b):
        self._validate_int(int_a)
        self._validate_int(int_b)
        return int_a * int_b

    def divide(self, int_a, int_b):
        return float(int_a) / int_b

    def _validate_int(self, arg):
        if not isinstance(arg, int):
            raise ArgumentException("Argument: {} is not an int".format(int))


class ArgumentException(Exception):
    pass
