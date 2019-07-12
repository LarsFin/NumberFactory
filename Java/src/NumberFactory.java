import java.util.Random;

class NumberFactory {

    private Random generator;

    NumberFactory() {
        generator = new Random();
    }

    NumberFactory(Random random) {
        generator = random;
    }

    int add(int a, int b) {

        return a + b;

    }

    int subtract(int a, int b) {

        return a - b;

    }

    int multiply(int a, int b) {

        return a * b;

    }

    float divide(int a, int b) {

        return (float) a / (float) b;

    }

    int square(int a) {

        return a * a;

    }

    int sum(int[] numbers) {

        int sum = 0;
        for (int n: numbers) {
            sum += n;
        }
        return sum;

    }

    int random() {

        return generator.nextInt(101);

    }

}
