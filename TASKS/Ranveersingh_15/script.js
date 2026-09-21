const arr = [22, 98, 56, 74, 88]

// Maximum number
let maxVal = arr.sort()
console.log("Maximum value: ", maxVal[4]);

// Sum of all numbers
let a = arr[0];
let b = arr[1];
let c = arr[2];
let d = arr[3];
let e = arr[4];
const sum = a + b + c + d + e
console.log("Sum of all elements: ", sum);

// Odd number count
const oddnum = arr.filter(arr => arr % 2 !== 0);
const oddcount = oddnum.length;
console.log("Odd numbers in this array: ", oddcount);







