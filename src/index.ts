import * as readline from "readline";
import { AdvancedCalculator } from "./s2.js";
const rl = readline.createInterface({
  input: process.stdin,

  output: process.stdout,
});

const calc = new AdvancedCalculator();

rl.question(
  "Enter operation (add, subtract, multiply, divide, square, cube, power): ",
  (op: string) => {
    rl.question("Enter first number: ", (inputA: string) => {
      const a: number = Number(inputA);

      if (op === "square" || op === "cube") {
        // only one number needed
        let result: number = NaN;
        result = Operation(op, a, 0);
        rl.close();
      } else {
        rl.question("Enter second number: ", (inputB: string) => {
          const b: number = Number(inputB);
          let result: number = NaN;
          result = Operation(op, a, b);
          rl.close();
        });
      }
    });
  }
);

function Operation(op: string, a: number, b: number): number 
{
  let result = 0;
  try
  {
    switch (op) {
      case "square":
        result = calc.square(a);
        break;
      case "cube":
        result = calc.cube(a);
        break;
      case "add":
        result = calc.add(a, b);
        break;
      case "subtract":
        result = calc.subtract(a, b);
        break;
      case "multiply":
        result = calc.multiply(a, b);
        break;
      case "divide":
        result = calc.divide(a, b);
        break;
      case "power":
        result = calc.power(a, b);
        break;
      default:
        console.log("error");
        //throw new Error("Unknown operation");
    }
    console.log(`Result: ${result}`);
  
  } catch (err) {
    console.error("Error:", (err as Error).message);
  }
  return result;
}