# frozen_string_literal: true

require_relative '../lib/number_factory.rb'

describe NumberFactory do
  int_a = 6
  int_b = 5

  subject { described_class.new }

  describe '#add' do
    it 'Should sum the values of two passed integers' do
      expect(subject.add(int_a, int_b)).to eq(11)
    end
  end
end
