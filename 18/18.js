"use strict";
const travelList = ["Japan", "Egypt", "Iceland", "Peru", "Thailand"];
console.log("Original order:");
console.log(travelList);
console.log("Alphabetical order:");
console.log([...travelList].sort());
console.log("Original order (again):");
console.log(travelList);
console.log("Reverse alphabetical order:");
console.log([...travelList].sort().reverse());
console.log("Original order (again):");
console.log(travelList);
travelList.reverse();
console.log("Reversed order:");
console.log(travelList);
travelList.reverse();
console.log("Original order (again):");
console.log(travelList);
travelList.sort();
console.log("Alphabetical order:");
console.log(travelList);
travelList.sort().reverse();
console.log("Reverse alphabetical order:");
console.log(travelList);
