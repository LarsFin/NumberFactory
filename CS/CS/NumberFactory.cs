using System;
namespace CS
{
    public interface IRandomGenerator
    {
        int Generate();
    }

    public class NumberFactory
    {
        IRandomGenerator _generator;

        private class RandomGenerator : IRandomGenerator
        {
            public int Generate()
            {
                return new Random().Next(101);
            }
        }

        public NumberFactory()
        {
            _generator = new RandomGenerator();
        }

        public NumberFactory(IRandomGenerator randomGenerator)
        {
            _generator = randomGenerator;
        }

        public int Add(int a, int b)
        {
            return a + b;
        }

        public int Subtract(int a, int b)
        {
            return a - b;
        }

        public int Multiply(int a, int b)
        {
            return a * b;
        }

        public float Divide(int a, int b)
        {
            return (float) a / (float) b;
        }

        public int Square(int a)
        {
            return a * a;
        }

        public int Sum(int[] numbers)
        {
            int sum = 0;
            foreach (int n in numbers)
            {
                sum += n;
            }
            return sum;
        }

        public int GenerateRandomNumber()
        {
            return _generator.Generate();
        }
    }
}
