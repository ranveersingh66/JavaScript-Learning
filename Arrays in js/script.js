// An array is a data structure to store multiple items in a specific sequence

let arrayName = [123, 345, 567,] // can store multiple  values in a sungle array
//index number  0,   1,   2, ...    (Index number starts always starts from 0)   

console.log(arrayName); 
// 0: 123
// 1: 345
// 2: 567

console.log(arrayName[2]);
// this prints only the 2nd value in the array
 
let arr = [123, "Hey", 345, 2390,] //an array can contain both string and integers 
console.log(arr.length) // prints the length of the following array i.e. 4

arr[2] = "my name is ranveer" // changes the value of index number 2 in the follwoing array.

console.log(arr.indexOf(123)); // tells the index number of the following value i.e. 0

console.log(arr.includes("Hey")) // give a boolean value if that value exists in the array
 arr.push("add this on the array!") // add the following value/string to the end of the array
 arr.unshift("add this on the start") // adds the value to the start of the array
 arr.pop() // deletes the last element of the following array
 arr.shift() // deletes the first element of the following array

let marks = [12, 23, 45, 98, 75, 1, 98, 11]
// index no.    0,  1,  2,  3,  4,  5,  6,  7
 
// marks.sort() // sorts the following array (Ascending order)

let SubarrMarks = marks.slice(1,5) // prints the values between index number 2 and 6
console.log(SubarrMarks);





