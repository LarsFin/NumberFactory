# frozen_string_literal: true

require_relative '../lib/number_factory.rb'

describe NumberFactory do
  int_a = 6
  int_b = 5
  float = 1.23

  subject { described_class.new }

  describe '#add' do
    it 'Should sum the values of two passed integers' do
      expect(subject.add(int_a, int_b)).to eq(11)
    end

    it 'Should throw an exception when ANY arguments passed are not integers' do
      expect { subject.add(int_a, float) }
        .to raise_error(RuntimeError, "Non int argument; '1.23' passed")
    end
  end

  describe '#subtract' do
    it 'Should subtract the values of two passed integers' do
      expect(subject.subtract(int_a, int_b)).to eq(1)
    end

    it 'Should throw an exception when ANY arguments passed are not integers' do
      expect { subject.subtract(int_a, float) }
        .to raise_error(RuntimeError, "Non int argument; '1.23' passed")
    end
  end

  describe '#multiply' do
    it 'Should multiply the values of two passed integers' do
      expect(subject.multiply(int_a, int_b)).to eq(30)
    end

    it 'Should throw an exception when ANY arguments passed are not integers' do
      expect { subject.multiply(int_a, float) }
        .to raise_error(RuntimeError, "Non int argument; '1.23' passed")
    end
  end

  describe '#divide' do
    it 'Should dived the values of two passed integers' do
      expect(subject.divide(int_a, int_b)).to eq(1.2)
    end
  end
end
