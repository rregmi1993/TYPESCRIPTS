"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Radius_1 = require("./Radius");
var Shape_1 = require("./Shape");
var shapeObj = new Shape_1.Shape(10, 20);
console.log(shapeObj.getInfo());
var radiusObj = new Radius_1.Radius(10, 20, 30);
console.log(radiusObj.getInfo());
