/*
A bit overkill. But wanted to try out TypeScript interfaces
*/

export interface IRandom {
  generate(): number;
}

export class Random implements IRandom {

  generate(): number {
    return Math.random();
  }

}
