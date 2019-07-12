public class Main {

    public static void main(String[] args) {

        NumberFactory numberFactory = new NumberFactory();
        System.out.println("Number Factory \uD83C\uDFED");
        int randomNumA = numberFactory.random();
        int randomNumB = numberFactory.random();
        System.out.println(randomNumA + " + " + randomNumB + " = " + numberFactory.add(randomNumA, randomNumB));
        System.out.println(randomNumA + " - " + randomNumB + " = " + numberFactory.subtract(randomNumA, randomNumB));
        System.out.println(randomNumA + " * " + randomNumB + " = " + numberFactory.multiply(randomNumA, randomNumB));
        System.out.println(randomNumA + " / " + randomNumB + " = " + numberFactory.divide(randomNumA, randomNumB));
        int[] myNumbers = new int[10];
        StringBuilder stringBuilder = new StringBuilder("My Numers:");
        for (int i = 0; i < 10; i++) {
            myNumbers[i] = numberFactory.random();
            stringBuilder.append(" ");
            stringBuilder.append(myNumbers[i]);
        }
        System.out.println(stringBuilder.toString());
        System.out.println("Sum of My Numbers: " + numberFactory.sum(myNumbers));
        System.out.println("\uD83C\uDFED Number Factory shutting down...");

    }

}
