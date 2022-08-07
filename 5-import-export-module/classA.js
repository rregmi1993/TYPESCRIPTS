"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classA = void 0;
var classA = /** @class */ (function () {
    function classA(fname, lname) {
        this._firstName = fname;
        this._lastName = lname;
    }
    Object.defineProperty(classA.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (fname) {
            this._firstName = fname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(classA.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return classA;
}());
exports.classA = classA;
