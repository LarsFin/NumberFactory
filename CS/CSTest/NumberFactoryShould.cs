using CS;
using Shouldly;
using System;
using Xunit;

namespace CSTest
{
    public class NumberFactoryShould
    {
        private NumberFactory _numberFactory;
        private int _num1;
        private int _num2;

        public NumberFactoryShould()
        {
            _numberFactory = new NumberFactory();
        }

        [Fact]
        public void BeAbleToAdd()
        {
            Random random = new Random();
            for (int i = 0; i < 10; i++)
            {
                _num1 = random.Next(-50, 50);
                _num2 = random.Next(-50, 50);
                int expectedValue = _num1 + _num2;
                _numberFactory.Add(_num1, _num2).ShouldBe(expectedValue);
            }
        }

        [Fact]
        public void BeAbleToAdd2()
        {
            _num1 = 5;
            _num2 = 8;
            int expectedValue = 13;
            _numberFactory.Add(_num1, _num2).ShouldBe(expectedValue);
        }
    }
}
