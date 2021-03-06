import sys
import unittest

from mock import MagicMock
from number_factory.number_factory import *


INT_A = 6
INT_B = 10
FLOAT = 2.8
INTEGERS = [5, 8, 11, 14, 22]
MIX_ARR = [4, 7, 9, 20.4, 85]


class NumberFactoryTest(unittest.TestCase):

    def setUp(self):
        self.number_factory = NumberFactory()

    def test_add(self):
        expected_result = 16
        actual_result = self.number_factory.add(INT_A, INT_B)
        fail_message = "Expected {expected}, got {actual}.".format(
            expected=expected_result, actual=actual_result)
        self.assertEqual(actual_result, expected_result, fail_message)

    def test_add_arguments(self):
        self.assertRaises(ArgumentException, self.number_factory.add,
                          INT_A, FLOAT)

    def test_subtract(self):
        expected_result = -4
        actual_result = self.number_factory.subtract(INT_A, INT_B)
        fail_message = "Expected {expected}, got {actual}.".format(
            expected=expected_result, actual=actual_result)
        self.assertEqual(actual_result, expected_result, fail_message)

    def test_subtract_arguments(self):
        self.assertRaises(ArgumentException, self.number_factory.subtract,
                          INT_A, FLOAT)

    def test_multiply(self):
        expected_result = 60
        actual_result = self.number_factory.multiply(INT_A, INT_B)
        fail_message = "Expected {expected}, got {actual}.".format(
            expected=expected_result, actual=actual_result)
        self.assertEqual(actual_result, expected_result, fail_message)

    def test_multiply_arguments(self):
        self.assertRaises(ArgumentException, self.number_factory.multiply,
                          INT_A, FLOAT)

    def test_divide(self):
        expected_result = 0.6
        actual_result = self.number_factory.divide(INT_A, INT_B)
        fail_message = "Expected {expected}, got {actual}.".format(
            expected=expected_result, actual=actual_result)
        self.assertEqual(actual_result, expected_result, fail_message)

    def test_divide_arguments(self):
        self.assertRaises(ArgumentException, self.number_factory.divide,
                          INT_A, FLOAT)

    def test_square(self):
        expected_result = 36
        actual_result = self.number_factory.square(INT_A)
        fail_message = "Expected {expected}, got {actual}.".format(
            expected=expected_result, actual=actual_result)
        self.assertEqual(actual_result, expected_result, fail_message)

    def test_square_argument(self):
        self.assertRaises(ArgumentException, self.number_factory.square, FLOAT)

    def test_sum(self):
        expected_result = 60
        actual_result = self.number_factory.sum(INTEGERS)
        fail_message = "Expected {expected}, got {actual}.".format(
            expected=expected_result, actual=actual_result)
        self.assertEqual(actual_result, expected_result, fail_message)

    def test_sum_argument(self):
        self.assertRaises(ArgumentException, self.number_factory.sum,
                          MIX_ARR)

    def test_random_called(self):
        staged_random = Random()
        staged_random.randint = MagicMock()
        self.number_factory = NumberFactory(staged_random)
        self.number_factory.random()
        staged_random.randint.assert_called_with(0, 101)

    def test_random_return(self):
        expected_result = 50
        staged_random = Random()
        staged_random.randint = MagicMock(return_value=expected_result)
        self.number_factory = NumberFactory(staged_random)
        actual_result = self.number_factory.random()
        fail_message = "Expected {expected}, got {actual}.".format(
            expected=expected_result, actual=actual_result)
        self.assertEqual(actual_result, expected_result, fail_message)


if __name__ == "__main__":
    unittest.main()
