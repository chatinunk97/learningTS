let apples = 5;
const speed: string = "fast";
const hasName: boolean = true;

//Built in objects
let now: Date = new Date();

//Array
const colors: string[] = ["red", "blue"];
const myNumbers: number[] = [1, 2, 3, 4];
const truths: boolean[] = [true, false, true];

//Classes

class Car {}

let car: Car = new Car();

//Object Literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//If the variable declaration and initialize is on the same line like let a = 100
//TS will figure out the type without us using Type Annotations

//When to use annotations
//1) Function returning 'any' type
const json = '{"x" : 10 , "y" : 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);
//JSON.parse transform the input in to JSON so TS cannot predice what will come out
//Thus TS treats it as 'any' ===> it cannot check for Errors

//2) When we declare a variable on one line and initialize later
let words = ["red", "green", "blue"];
// Or foundword = false works as well be cause it follows the same line declrare/initialize rule above
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

//3 Variable whose type cannot be inferred correctly
let numbers = [-10, -1.12, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
