"use strict";
var ClassExample = /** @class */ (function () {
    // constructor 
    function ClassExample(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    //getter-setter 
    ClassExample.prototype.setFirstName = function (fName) {
        this.firstName = fName;
    };
    ClassExample.prototype.getFirstName = function () {
        return this.firstName;
    };
    return ClassExample;
}());
var classexampleobj = new ClassExample("Ram", "Regmi");
console.log(classexampleobj.firstName);
console.log(classexampleobj.lastName);
classexampleobj.setFirstName("Ramchandra");
console.log(classexampleobj.getFirstName());
