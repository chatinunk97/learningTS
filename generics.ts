class ArrayOfNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything(["a", "b"]);
// Eventho we don't specify <T> it can still figure out what it is
// It's type inference

//Example of generics with functions

function printStrings(arr: string[]): void {
  for (let i of arr) {
    console.log(i);
  }
}

function printNumbers(arr: number[]): void {
  for (let i of arr) {
    console.log(i);
  }
}
//Remember <T> is just like an extra argument that give us the type info

function printAnything<T>(arr: T[]): void {
  for (let i of arr) {
    console.log(i);
  }
}

// We can just pass in <string> with out [] because
// In the function def we already use T to tell that the input is an array with T inside
// OR we don't need to pass in <T> since TS already analyze ["a","b"]
// But it would be better to do the type annotation because it will help us check again
// Whether the input we are passing in is really the type we want , this apply to output of a function as well
printAnything<string>(["a", "b"]);

// Generic Contraints
class Car {
  print() {
    console.log("I am a car");
  }
}

class House {
  print() {
    console.log("I am a house");
  }
}

interface Printable {
  print(): void;
}

// Extends the Type Variable with interface to constraints the input
//
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<House | Car>([new Car(), new House()]);
