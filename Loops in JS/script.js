 // For loops in JavaScript
 // A for loop is a control structure that allows you to repeat a block of code a certain number of times. It consists of three parts: 
 // INITIALIZATION, CONDITION, and INCREMENT/DECREMENT. The syntax of a for loop is as follows:
 // for (initialization; condition; increment/decrement) {
 //     // code to be executed
 // }

 // 
// for(z=1; z<3; z++) {
//     console.log(z); // Output: 1, 2
// }

// const x = 1;
// for(x; x<6; x+2){
//     console.log(x); // Output: 1, 3, 5
// }

// for(a=15; a>0; a--){
//     console.log(a); // Output: 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// } 

let a = 0;
for(a; a < 11; a++){
    console.log(a); // Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

let x = 0;
for(x; x<20; x+=2){
    console.log(x); // Output: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18
}

let z = 5;
for(z; z<=50; z+=5){
    console.log(z); // Output: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50
}