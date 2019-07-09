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

        [Fact]
        public void BeAbleToSubtract()
        {
            Random random = new Random();
            for (int i = 0; i < 10; i++)
            {
                _num1 = random.Next(-50, 50);
                _num2 = random.Next(-50, 50);
                int expectedValue = _num1 - _num2;
                _numberFactory.Subtract(_num1, _num2).ShouldBe(expectedValue);
            }
        }

        [Fact]
        public void BeAbleToSubtract2()
        {
            _num1 = 5;
            _num2 = 8;
            int expectedValue = -3;
            _numberFactory.Subtract(_num1, _num2).ShouldBe(expectedValue);
        }

        [Fact]
        public void BeAbleToMultiply()
        {
            Random random = new Random();
            for (int i = 0; i < 10; i++)
            {
                _num1 = random.Next(-50, 50);
                _num2 = random.Next(-50, 50);
                int expectedValue = _num1 * _num2;
                _numberFactory.Multiply(_num1, _num2).ShouldBe(expectedValue);
            }
        }

        [Fact]
        public void BeAbleToMultiply2()
        {
            _num1 = 5;
            _num2 = 8;
            int expectedValue = 40;
            _numberFactory.Multiply(_num1, _num2).ShouldBe(expectedValue);
        }

        [Fact]
        public void BeAbleToDivide()
        {
            Random random = new Random();
            for (int i = 0; i < 10; i++)
            {
                _num1 = random.Next(-50, 50);
                _num2 = random.Next(-50, 50);
                float expectedValue = (float) _num1 / (float) _num2;
                _numberFactory.Divide(_num1, _num2).ShouldBe(expectedValue);
            }
        }

        [Fact]
        public void BeAbleToDivide2()
        {
            _num1 = 5;
            _num2 = 8;
            float expectedValue = 0.625f;
            _numberFactory.Divide(_num1, _num2).ShouldBe(expectedValue);
        }

        [Fact]
        public void BeAbleToSquare()
        {
            _num1 = 5;
            _num2 = 8;
            int expectedValue = 25;
            int expectedValue2 = 64;
            _numberFactory.Square(_num1).ShouldBe(expectedValue);
            _numberFactory.Square(_num2).ShouldBe(expectedValue2);
        }
    }
}
