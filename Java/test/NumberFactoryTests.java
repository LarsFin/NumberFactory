import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import java.util.Random;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class NumberFactoryTests {

    private NumberFactory numberFactory;

    @BeforeEach
    void beforeEach() {
        numberFactory = new NumberFactory();
    }

    private int numA = 5;
    private int numB = 10;

    @Nested
    @DisplayName("Addition Tests")
    class AdditionTests {

        @Test
        @DisplayName("Sums two integers")
        void standardTest() {
            int expectedResult = 15;
            assertEquals(expectedResult, numberFactory.add(numA, numB));
        }

        @Test
        @DisplayName("Random additions to test broad range")
        void variationTest() {
            Random random = new Random();
            for (int i = 0; i < 5; i++) {
                numA = random.nextInt(100) - 50;
                numB = random.nextInt(100) - 50;
                assertEquals(numA + numB, numberFactory.add(numA, numB));
            }
        }

    }

    @Nested
    @DisplayName("Subtraction Tests")
    class SubtractionTests {

        @Test
        @DisplayName("Subtracts two integers")
        void standardTest() {
            int expectedResult = -5;
            assertEquals(expectedResult, numberFactory.subtract(numA, numB));
        }

        @Test
        @DisplayName("Random subtractions to test broad range")
        void variationTest() {
            Random random = new Random();
            for (int i = 0; i < 5; i++) {
                numA = random.nextInt(100) - 50;
                numB = random.nextInt(100) - 50;
                assertEquals(numA - numB, numberFactory.subtract(numA, numB));
            }
        }

    }

    @Nested
    @DisplayName("Multiplication Tests")
    class MultiplicationTests {

        @Test
        @DisplayName("Multiplies two integers")
        void standardTest() {
            int expectedResult = 50;
            assertEquals(expectedResult, numberFactory.multiply(numA, numB));
        }

        @Test
        @DisplayName("Random multiplications to test broad range")
        void variationTest() {
            Random random = new Random();
            for (int i = 0; i < 5; i++) {
                numA = random.nextInt(100) - 50;
                numB = random.nextInt(100) - 50;
                assertEquals(numA * numB, numberFactory.multiply(numA, numB));
            }
        }

    }

    @Nested
    @DisplayName("Division Tests")
    class DivisionTests {

        @Test
        @DisplayName("Divides two Integers")
        void standardTest() {
            float expectedResult = 0.5f;
            assertEquals(expectedResult, numberFactory.divide(numA, numB));
        }

        @Test
        @DisplayName("Random divisions to test broad range")
        void variationTest() {
            Random random = new Random();
            for (int i = 0; i < 5; i++) {
                numA = random.nextInt(100) - 50;
                numB = random.nextInt(100) - 50;
                assertEquals((float) numA / (float) numB, numberFactory.divide(numA, numB));
            }
        }

    }

    @Nested
    @DisplayName("Square Tests")
    class SquareTests {

        @Test
        @DisplayName("Square Integer")
        void standardTest() {
            int expectedResult = 25;
            assertEquals(expectedResult, numberFactory.square(numA));
        }

        @Test
        @DisplayName("Random squares to test broad range")
        void variationTest() {
            Random random = new Random();
            for (int i = 0; i < 5; i++) {
                numA = random.nextInt(100) - 50;
                assertEquals(numA * numA, numberFactory.square(numA));
            }
        }

    }

    @Nested
    @DisplayName("Sum Tests")
    class SumTests {

        @Test
        @DisplayName("Sums Integers")
        void standardTest() {
            int expectedResult = 40;
            int[] numbers = new int[] { 3, 8, 12, 17 };
            assertEquals(expectedResult, numberFactory.sum(numbers));
        }

    }

    @Nested
    @DisplayName("Random Tests")
    class RandomTests {

        @Test
        @DisplayName("Calls random generation")
        void callsRandomGeneration() {
            Random random = mock(Random.class);
            numberFactory = new NumberFactory(random);
            numberFactory.random();
            verify(random).nextInt(101);
        }

    }

}
