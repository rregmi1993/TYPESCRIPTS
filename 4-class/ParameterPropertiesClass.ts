class ParameterPropertiesClass{


    constructor(private _firstName: string, private _lastName: string){}

    get firstName(): string{
        return this._firstName;
    }

    get lastName(): string{
        return this._lastName;
    }

}

let parameterPropertiesClass = new ParameterPropertiesClass('Subham', 'Shaw');
console.log(parameterPropertiesClass.firstName);
console.log(parameterPropertiesClass.lastName);


// it reduce the Boilerplate code