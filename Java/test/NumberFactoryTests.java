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

        int num;
        int num2;

        @Test
        @DisplayName("5 + 10 should equal 15")
        void test1() {
            num = 5;
            num2 = 10;
            assertEquals(num + num2, numberFactory.add(num, num2));
        }

        @Test
        @DisplayName("-10 + -5 should equal -15")
        void test2() {
            num = -10;
            num2 = -5;
            assertEquals(num + num2, numberFactory.add(num, num2));
        }

        @Test
        @DisplayName("Random additions to test broad range")
        void test3() {
            Random random = new Random();
            for (int i = 0; i < 5; i++) {
                num = random.nextInt(100) - 50;
                num2 = random.nextInt(100) - 50;
                assertEquals(num + num2, numberFactory.add(num, num2));
            }
        }

    }

}
