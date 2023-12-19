"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var plane = {
    color: "red",
};
Reflect.defineMetadata("note", "hi there", plane);
console.log(plane);
