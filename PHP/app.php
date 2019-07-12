<?php

include './src/NumberFactory.php';

echo "Number Factory 🏭\n";
$randomGenerator = new RandomGenerator;
$INT_A = NumberFactory::random($randomGenerator);
$INT_B = NumberFactory::random($randomGenerator);
printf("%d + %d = %d\n", $INT_A, $INT_B, NumberFactory::add($INT_A, $INT_B));
printf("%d - %d = %d\n", $INT_A, $INT_B, NumberFactory::subtract($INT_A, $INT_B));
printf("%d * %d = %d\n", $INT_A, $INT_B, NumberFactory::multiply($INT_A, $INT_B));
printf("%d / %d = %f\n", $INT_A, $INT_B, NumberFactory::divide($INT_A, $INT_B));
printf("%d ** 2 = %d\n", $INT_A, NumberFactory::square($INT_A));
$myNumbers = [];
printf("My Numbers: ");
for ($i = 0; $i < 10; $i++) {
    $myNumbers[$i] = NumberFactory::random($randomGenerator);
    printf("%d ", $myNumbers[$i]);
}
printf("\nSum of My Numbers: %d\n", NumberFactory::sum($myNumbers));
echo "🏭  Number Factory shutting down...\n";
