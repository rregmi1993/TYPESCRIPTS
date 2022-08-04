class ClassExample{
    //propertis
    firstName: string;
    lastName: string;

    // constructor 
    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }

    //getter-setter 
    setFirstName(fName: string){
        this.firstName = fName;
    }

    getFirstName() : string{
        return this.firstName;
    }

}


let classexampleobj = new ClassExample("Ram", "Regmi");
console.log(classexampleobj.firstName);
console.log(classexampleobj.lastName);
classexampleobj.setFirstName("Ramchandra")
console.log(classexampleobj.getFirstName()) 
