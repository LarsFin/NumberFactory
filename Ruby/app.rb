# frozen_string_literal: true

require_relative 'lib/number_factory'

puts 'Number Factory 🏭'
number_factory = NumberFactory.new
int_a = number_factory.random
int_b = number_factory.random
puts "#{int_a} + #{int_b} = #{number_factory.add(int_a, int_b)}"
puts "#{int_a} - #{int_b} = #{number_factory.subtract(int_a, int_b)}"
puts "#{int_a} * #{int_b} = #{number_factory.multiply(int_a, int_b)}"
puts "#{int_a} / #{int_b} = #{number_factory.divide(int_a, int_b)}"
puts "#{int_a} ** 2 = #{number_factory.square(int_a)}"
my_numbers = []
my_numbers << number_factory.random until my_numbers.length == 10
puts "My Numbers: #{my_numbers.join(', ')}"
puts "Sum of My Numbers: #{number_factory.sum(my_numbers)}"
puts '🏭  Number Factory shutting down...'
