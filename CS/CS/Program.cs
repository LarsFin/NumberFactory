using System;

namespace CS
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Number Factory 🏭");
            NumberFactory numberFactory = new NumberFactory();
            Console.WriteLine("Created new Number Factory...");
            int randomNum1 = numberFactory.GenerateRandomNumber();
            int randomNum2 = numberFactory.GenerateRandomNumber();
            Console.WriteLine($"{randomNum1} + {randomNum2} = {numberFactory.Add(randomNum1, randomNum2)}");
            Console.WriteLine($"{randomNum1} - {randomNum2} = {numberFactory.Subtract(randomNum1, randomNum2)}");
            Console.WriteLine($"{randomNum1} * {randomNum2} = {numberFactory.Multiply(randomNum1, randomNum2)}");
            Console.WriteLine($"{randomNum1} / {randomNum2} = {numberFactory.Divide(randomNum1, randomNum2)}");
            Console.WriteLine($"{randomNum1} ** 2 = {numberFactory.Square(randomNum1)}");
            int[] randomNumbers = new int[10];
            Console.Write($"My Numbers:");
            for (int i = 0; i < 10; i++)
            {
                randomNumbers[i] = numberFactory.GenerateRandomNumber();
                Console.Write($" {randomNumbers[i]}");
            }
            Console.WriteLine(".");
            Console.WriteLine($"Sum of My Numbers: {numberFactory.Sum(randomNumbers)}");
            Console.WriteLine("🏭 Number Factory shutting down...");
        }
    }
}
