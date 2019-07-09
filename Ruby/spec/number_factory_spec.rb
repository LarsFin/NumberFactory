# frozen_string_literal: true

require_relative '../lib/number_factory.rb'

describe NumberFactory do
  int_a = 6
  int_b = 5
  float = 1.23
  numbers = [3, 7, 9, 11]
  string = '37911'

  subject { described_class.new }

  describe '#add' do
    it 'Should sum the values of two passed Integers' do
      expect(subject.add(int_a, int_b)).to eq(11)
    end

    it 'Should throw an exception when ANY arguments passed are not Integers' do
      expect { subject.add(int_a, float) }
        .to raise_error(RuntimeError,
                        "Non Integer argument; (Float) '1.23' passed")
    end
  end

  describe '#subtract' do
    it 'Should subtract the values of two passed Integers' do
      expect(subject.subtract(int_a, int_b)).to eq(1)
    end

    it 'Should throw an exception when ANY arguments passed are not Integers' do
      expect { subject.subtract(int_a, float) }
        .to raise_error(RuntimeError,
                        "Non Integer argument; (Float) '1.23' passed")
    end
  end

  describe '#multiply' do
    it 'Should multiply the values of two passed Integers' do
      expect(subject.multiply(int_a, int_b)).to eq(30)
    end

    it 'Should throw an exception when ANY arguments passed are not Integers' do
      expect { subject.multiply(int_a, float) }
        .to raise_error(RuntimeError,
                        "Non Integer argument; (Float) '1.23' passed")
    end
  end

  describe '#divide' do
    it 'Should dived the values of two passed Integers' do
      expect(subject.divide(int_a, int_b)).to eq(1.2)
    end

    it 'Should throw an exception when ANY arguments passed are not Integers' do
      expect { subject.divide(int_a, float) }
        .to raise_error(RuntimeError,
                        "Non Integer argument; (Float) '1.23' passed")
    end
  end

  describe '#square' do
    it 'Should square a passed Integer' do
      expect(subject.square(int_a)).to eq(36)
    end

    it 'Should throw an exception when passed argument is not an Integer' do
      expect { subject.square(float) }
        .to raise_error(RuntimeError,
                        "Non Integer argument; (Float) '1.23' passed")
    end
  end

  describe '#sum' do
    it 'Should sum an array of Integers' do
      expect(subject.sum(numbers)).to eq(30)
    end

    it 'Should throw an exception when passed argument is not an array' do
      expect { subject.sum(string) }
        .to raise_error(RuntimeError,
                        "Non Array argument; (String) '37911' passed")
    end
  end
end
