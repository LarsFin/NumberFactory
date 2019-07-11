<?php
declare(strict_types=1);

include './src/NumberFactory.php';

use PHPUnit\Framework\TestCase;

final class NumberFactoryTest extends TestCase
{
    private $INT_A = 3;
    private $INT_B = 10;

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
}
?>
