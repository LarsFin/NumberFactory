using System;
namespace CS
{
    public class NumberFactory
    {
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
            return 0;
        }
    }
}
