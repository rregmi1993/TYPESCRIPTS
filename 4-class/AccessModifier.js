"use strict";
var AccessModifier = /** @class */ (function () {
    function AccessModifier(fname, lname) {
        this._firstName = fname;
        this._lastName = lname;
    }
    Object.defineProperty(AccessModifier.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (fname) {
            this._firstName = fname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccessModifier.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return AccessModifier;
}());
var AccessModifierObj = new AccessModifier("Ram", "Chandra");
AccessModifierObj.firstName = "Ram";
console.log(AccessModifierObj.firstName);
console.log(AccessModifierObj.lastName);
