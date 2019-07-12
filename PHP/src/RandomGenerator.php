<?php
declare(strict_types=1);

class RandomGenerator
{
    public function rand(int $low, int $up)
    {
        return mt_rand($low, $up);
    }
}
?>
