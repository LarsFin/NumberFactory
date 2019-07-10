import sys
import unittest

from number_factory.number_factory import *


INT_A = 6
INT_B = 10


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
        self.assertRaises(ArgumentException, self.number_factory.add, 2.4, 8.9)

    def test_subtract(self):
        expected_result = -4
        actual_result = self.number_factory.subtract(INT_A, INT_B)
        fail_message = "Expected {expected}, got {actual}.".format(
            expected=expected_result, actual=actual_result)
        self.assertEqual(actual_result, expected_result, fail_message)

    def test_subtract_arguments(self):
        self.assertRaises(ArgumentException, self.number_factory.subtract,
                          6.4, 0.9)

    def test_multiply(self):
        expected_result = 60
        actual_result = self.number_factory.multiply(INT_A, INT_B)
        fail_message = "Expected {expected}, got {actual}.".format(
            expected=expected_result, actual=actual_result)
        self.assertEqual(actual_result, expected_result, fail_message)

    def test_multiply_arguments(self):
        self.assertRaises(ArgumentException, self.number_factory.multiply,
                          8.9, 2.2)

    def test_divide(self):
        expected_result = 0.6
        actual_result = self.number_factory.divide(INT_A, INT_B)
        fail_message = "Expected {expected}, got {actual}.".format(
            expected=expected_result, actual=actual_result)
        self.assertEqual(actual_result, expected_result, fail_message)


if __name__ == "__main__":
    unittest.main()
