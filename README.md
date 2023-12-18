# Decorators

First argument will be the Prototype (Boat) _This is only for the prototype (methods) property are define in constructor_
\*We cannot use the prototype to look up a value like property BECAUSE property is created when the instance of that class is created. Decorators is when we "define" the class
2nd argument is the method/property we're applying Decorator to (pilot())
Decorator is ran only 1 time when our class is define (not instance creation)

```
function testDecorator(target: any, key: string): void {
  console.log("Target :", target);
  console.log("Key :", key);
}

```

```
class Boat {
  color: string = "red";
  get formattedColor(): string {
    return `This boat's color : ${this.color}`;
  }
  @testDecorator
  pilot(): void {
    console.log("swish");
  }
}
```

If we look it this way it's just a function that takes in
the above argument and execute it. It's a sugar syntax

# But why we use Decorators ?

The thrid argument is PropertyDescriptor

PropertyDescriptor

```
const car = {make : 'honda' , year : 2000}

Object.getOwnPropertyDescriptor(car,'make')
```

Returns

```
{
  value: 'honda',
  writable: true,
  enumerable: true,
  configurable: true
}
```

If we change writable to false we cannot change the value anymore
car.make = 'toyota' will not work

So PropertyDescriptor is used to change the prototype of a class's method/property

# Using Decorators to add some logic to a method

This is for testing. When we call pilot() it will throw an error or sure

```
  @logError
  pilot(): void {
    throw new Error();
    console.log("swish");
  }
```

Our decorator now looks like this

```
function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = function () {
    try {
      method();
    } catch (error) {
      console.log("Opps boat was sunk ! error !");
    }
  };
}
```

Now what's happening is we assign the method to the variable method
This is what desc looks like and then we

```
{
  value: [Function (anonymous)],
  writable: true,
  enumerable: true,
  configurable: true
}
```

Then we replace desc.value ==> which is the function itself (pilot) to another thing
in this case we are executing the method and it gives us an error so it will result on catch

# Decorator Factories

Make a decorator function more general
We can just wrap the function in a function

This is a common, we want to decorator to take in an argument to make it more useable

```
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (error) {
        console.log(errorMessage);
      }
    };
  };
}
```

# Decorator with Methods parameter

```
pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === "fast") {
      console.log("Swish");
    } else {
      console.log("Nothing");
    }
  }

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

This will just show us the parameter accoringly to what we define in the method
```

# Decorator with Class definition

```
@classDecorator
class Boat {
...
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

This will return the constructor function of class Boat
```
