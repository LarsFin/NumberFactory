import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import java.util.Random;

import static org.junit.jupiter.api.Assertions.assertEquals;

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

}
