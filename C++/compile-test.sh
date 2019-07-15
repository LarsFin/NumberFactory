#!/bin/bash

# Create binary directory if not existant
output=$(ls | grep bin)
if [ -z "$output" ]
then
  mkdir bin
fi

g++ test/number_factory_test.cpp -o bin/test_number_factory.out -Wall -Wextra -Wshadow -Wnon-virtual-dtor -pedantic
chmod 700 bin/test_number_factory.out
./bin/test_number_factory.out
