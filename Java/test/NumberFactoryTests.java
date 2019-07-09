import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import java.util.Random;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class NumberFactoryTests {

    NumberFactory numberFactory;

    @BeforeEach
    void beforeEach() {
        numberFactory = new NumberFactory();
    }

    @Nested
    @DisplayName("Addition Tests")
    class AdditionTests {

        int numA;
        int numB;

        @Test
        @DisplayName("5 + 10 should equal 15")
        void standardTest() {
            numA = 5;
            numB = 10;
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

}
