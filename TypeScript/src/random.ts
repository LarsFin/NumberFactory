/*
A bit overkill. But wanted to try out TypeScript interfaces
*/

export interface RandomGenerator {
  generate(): number;
}

export class Random implements RandomGenerator {

  generate(): number {
    return Math.random();
  }

}
