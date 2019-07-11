<?php
declare(strict_types=1);

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

}
?>
