import { Calculator } from "./s1.js";
export class AdvancedCalculator extends Calculator {
  square(a: number): number {
    return a * a;
  }

  cube(a: number): number {
    return a * a * a;
  }

  power(a: number, b: number): number {
    return Math.pow(a, b);
  }
}