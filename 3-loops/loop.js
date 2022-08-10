"use strict";
for (var i_1 = 0; i_1 < 10; i_1++) {
    console.log(i_1);
}
console.log('------------------------');
// for loop for array of number
var samplearray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i_2 = 0; i_2 < samplearray.length; i_2++) {
    console.log(samplearray[i_2]);
}
console.log('------------------------');
//simplified for loop 
var samplearraylist = ["Ram", "Shyam", "Mayank", "Jemu"];
for (var _i = 0, samplearraylist_1 = samplearraylist; _i < samplearraylist_1.length; _i++) {
    var iname = samplearraylist_1[_i];
    console.log(iname);
    if (iname == "Ram") {
        console.log("This is my name:" + iname);
    }
}
console.log('------------------------');
// add the elemets in arrays
samplearraylist.push("Subham");
samplearraylist.push("Teja");
for (var _a = 0, samplearraylist_2 = samplearraylist; _a < samplearraylist_2.length; _a++) {
    var iname = samplearraylist_2[_a];
    console.log(iname);
    if (iname == "Ram") {
        console.log("This is my name:" + iname);
    }
}
console.log('------------------------');
// add the elemets in arrays
samplearraylist.pop();
for (var _b = 0, samplearraylist_3 = samplearraylist; _b < samplearraylist_3.length; _b++) {
    var iname = samplearraylist_3[_b];
    console.log(iname);
    if (iname == "Ram") {
        console.log("This is my name:" + iname);
    }
}
console.log('------------------------');
//while loop
var i = 1;
while (i < 4) {
    console.log("value of i is:" + i);
    i++;
}
