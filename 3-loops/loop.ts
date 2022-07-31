
for(let i = 0; i<10; i++){
    console.log(i);
}

console.log('------------------------')

// for loop for array of number
let samplearray: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for(let i = 0; i<samplearray.length; i++){
    console.log(samplearray[i]);
}

console.log('------------------------')

//simplified for loop 
let samplearraylist: string[] = ["Ram", "Shyam", "Mayank", "Jemu"]

for(let iname of samplearraylist){
    console.log(iname);
    if(iname == "Ram"){
        console.log("This is my name:" + iname);
    }
}

console.log('------------------------')
// add the elemets in arrays
samplearraylist.push("Subham");
samplearraylist.push("Teja");
for(let iname of samplearraylist){
    console.log(iname);
    if(iname == "Ram"){
        console.log("This is my name:" + iname);
    }
}

console.log('------------------------')
// add the elemets in arrays
samplearraylist.pop();
for(let iname of samplearraylist){
    console.log(iname);
    if(iname == "Ram"){
        console.log("This is my name:" + iname);
    }
}

console.log('------------------------')

//while loop
let i: number = 1;
while (i < 4) {
    console.log( "value of i is:" + i )
    i++;
}