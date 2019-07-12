# -*- coding: utf-8 -*-

from number_factory.number_factory import NumberFactory

print("Number Factory 🏭")
number_factory = NumberFactory()
int_a = number_factory.random()
int_b = number_factory.random()
print("{} + {} = {}".format(int_a, int_b, number_factory.add(int_a, int_b)))
print("{} - {} = {}".format(int_a, int_b, number_factory.subtract(int_a, int_b)))
print("{} * {} = {}".format(int_a, int_b, number_factory.multiply(int_a, int_b)))
print("{} / {} = {}".format(int_a, int_b, number_factory.divide(int_a, int_b)))
my_numbers = []
for i in range(10):
    my_numbers.append(number_factory.random())
print("My Numbers: {}".format(", ".join(str(i) for i in my_numbers)))
print("Sum of My Numbers: {}".format(number_factory.sum(my_numbers)))
print("🏭  Number Factory shutting down...")
