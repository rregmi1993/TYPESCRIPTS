import { Radius } from "./Radius";
import { Shape } from "./Shape";

let shapeObj = new Shape(10, 20);
console.log(shapeObj.getInfo());
let radiusObj = new Radius(10, 20, 30);
console.log(radiusObj.getInfo())