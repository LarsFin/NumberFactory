<?php
declare(strict_types=1);

include './src/ArgumentException.php';
include './src/RandomGenerator.php';

final class NumberFactory
{

    public static function add(int $a, int $b) {

        return $a + $b;

    }

    public static function subtract(int $a, int $b) {

        return $a - $b;

    }

    public static function multiply(int $a, int $b) {

        return $a * $b;

    }

    public static function divide(int $a, int $b) {

        return $a / $b;

    }

    public static function square(int $a) {

        return $a ** 2;

    }

    public static function sum(array $arr) {

        $sum = 0;

        foreach($arr as &$num) {
            if (gettype($num) != integer::class && gettype($num) != int::class) {
                throw new ArgumentException("Non int type within array");
            }
            $sum += $num;
        }

        return $sum;

    }

}
?>
