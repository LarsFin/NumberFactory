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
    int_a * int_b
  end

  private

  def validate_int(int)
    raise("Non int argument; '#{int}' passed") unless int.instance_of? Integer
  end
end
