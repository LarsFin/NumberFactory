<?php
declare(strict_types=1);

include './src/NumberFactory.php';

use PHPUnit\Framework\TestCase;

final class NumberFactoryTest extends TestCase
{
    private $INT_A = 3;
    private $INT_B = 10;
    private $INTS = [4, 6, 9, 11];
    private $MIX = [5, "5", 2.3];

    public function testAddReturn(): void
    {
        $expected = 13;
        $this->assertSame(
            $expected,
            NumberFactory::add($this->INT_A, $this->INT_B)
        );
    }

    public function testSubtractReturn(): void
    {
        $expected = -7;
        $this->assertSame(
            $expected,
            NumberFactory::subtract($this->INT_A, $this->INT_B)
        );
    }

    public function testMultiplyReturn(): void
    {
        $expected = 30;
        $this->assertSame(
            $expected,
            NumberFactory::multiply($this->INT_A, $this->INT_B)
        );
    }

    public function testDivideReturn(): void
    {
        $expected = 0.3;
        $this->assertSame(
            $expected,
            NumberFactory::divide($this->INT_A,$this->INT_B)
        );
    }

    public function testSquareReturn(): void
    {
        $expected = 9;
        $this->assertSame(
            $expected,
            NumberFactory::square($this->INT_A)
        );
    }

    public function testSumReturn(): void
    {
        $expected = 30;
        $this->assertSame(
            $expected,
            NumberFactory::sum($this->INTS)
        );
    }

    public function testSumArgument(): void
    {
        $this->expectException(ArgumentException::class);
        NumberFactory::sum($this->MIX);
    }
}
?>
