@classDecorator
class Boat {
  @testDecorator
  color: string = "red";

  @testDecorator
  get formattedColor(): string {
    return `This boat's color : ${this.color}`;
  }
  @logError("Customized error mesg!")
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
}

//Decorators
// First argument will be the prototype (Boat)
// 2nd argument is the 'key' method/property we're applying Decorator to (pilot)
//Decorator is ran only 1 time when our class is define (not instance creation)

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(key);
}

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
