import "reflect-metadata";

// const plane = {
//   color: "red",
// };

// Reflect.defineMetadata("note", "hi there from metadata", plane);

// console.log(plane);

// const note = Reflect.getMetadata("note", plane);

// console.log(note);

// Reflect.defineMetadata("note", "hi there", plane, "color");
@printMetadata
class Plane {
  color: string = "color";

  @markFunction("123123")
  fly(): void {
    console.log("vrrrrrrr");
  }
}

function markFunction(secretInfo: string) {
  return (target: Plane, key: string) => {
    // (<metadataKey , thevalue , theObj , theNameOftheMethod/Property)
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    // We loop through the prototype which will get all of the keys
    // Then we attempt to find ALL of the Metadata info which has the property name "secret"
    const secret = Reflect.getMetadata("secret", target.prototype, key);
    console.log("From printMetadata!", secret);
  }
}

const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");
console.log(secret);
