"use strict";
var ParameterPropertiesClass = /** @class */ (function () {
    function ParameterPropertiesClass(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(ParameterPropertiesClass.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParameterPropertiesClass.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    return ParameterPropertiesClass;
}());
var parameterPropertiesClass = new ParameterPropertiesClass('Subham', 'Shaw');
console.log(parameterPropertiesClass.firstName);
console.log(parameterPropertiesClass.lastName);
