export class classA{
    private _firstName: string;
    private _lastName: string;


    constructor (fname: string, lname: string){
        this._firstName = fname;
        this._lastName = lname;
    }
    set firstName(fname: string){
        this._firstName = fname;
    }

    get firstName() : string{
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }
    set lastName(value: string) {
        this._lastName = value;
    }


}


