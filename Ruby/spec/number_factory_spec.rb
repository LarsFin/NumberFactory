# frozen_string_literal: true

require_relative '../lib/number_factory.rb'

describe NumberFactory do

  intA = 6
  intB = 5

  subject { described_class.new() }

  describe '#add' do
    it 'Should sum the values of two passed integers' do
      expect(subject.add(intA, intB)).to eq(11)
    end
  end

end
