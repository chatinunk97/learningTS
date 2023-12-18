var ArrayOfNumbers = /** @class */ (function () {
    function ArrayOfNumbers(collection) {
        this.collection = collection;
    }
    ArrayOfNumbers.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfNumbers;
}());
var ArrayOfStrings = /** @class */ (function () {
    function ArrayOfStrings(collection) {
        this.collection = collection;
    }
    ArrayOfStrings.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfStrings;
}());
var ArrayOfAnything = /** @class */ (function () {
    function ArrayOfAnything(collection) {
        this.collection = collection;
    }
    ArrayOfAnything.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfAnything;
}());
var arr = new ArrayOfAnything(["a", "b"]);
// Eventho we don't specify <T> it can still figure out what it is
// It's type inference
//Example of generics with functions
function printStrings(arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        console.log(i);
    }
}
function printNumbers(arr) {
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var i = arr_2[_i];
        console.log(i);
    }
}
//Remember <T> is just like an extra argument that give us the type info
function printAnything(arr) {
    for (var _i = 0, arr_3 = arr; _i < arr_3.length; _i++) {
        var i = arr_3[_i];
        console.log(i);
    }
}
// We can just pass in <string> with out [] because
// In the function def we already use T to tell that the input is an array with T inside
// OR we don't need to pass in <T> since TS already analyze ["a","b"]
// But it would be better to do the type annotation because it will help us check again
// Whether the input we are passing in is really the type we want , this apply to output of a function as well
printAnything(["a", "b"]);
// Generic Contraints
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.print = function () {
        console.log("I am a car");
    };
    return Car;
}());
var House = /** @class */ (function () {
    function House() {
    }
    House.prototype.print = function () {
        console.log("I am a house");
    };
    return House;
}());
// Extends the Type Variable with interface to constraints the input
//
function printHousesOrCars(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}
printHousesOrCars([new Car(), new House()]);
