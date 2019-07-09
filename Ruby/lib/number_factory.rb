# frozen_string_literal: true

# A class for completing simple mathematical functions
class NumberFactory
  def add(int_a, int_b)
    validate_int(int_a)
    validate_int(int_b)
    int_a + int_b
  end

  def subtract(int_a, int_b)
    validate_int(int_a)
    validate_int(int_b)
    int_a - int_b
  end

  def multiply(int_a, int_b)
    validate_int(int_a)
    validate_int(int_b)
    int_a * int_b
  end

  def divide(int_a, int_b)
    validate_int(int_a)
    validate_int(int_b)
    int_a.to_f / int_b
  end

  def square(int)
    validate_int(int)
    int**2
  end

  def sum(numbers)
    validate_arr(numbers)
    sum = 0
    numbers.each { |n| sum += n }
    sum
  end

  private

  def validate_int(int)
    raise("Non Integer argument; (#{int.class}) '#{int}' passed") unless
      int.instance_of? Integer
  end

  def validate_arr(arr)
    raise("Non Array argument; (#{arr.class}) '#{arr}' passed") unless
      arr.instance_of? Array
  end
end
