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

// let a = 0;
// for(a; a < 11; a++){
//     console.log(a); // Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// }

// let x = 0;
// for(x; x<20; x+=2){
//     console.log(x); // Output: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18
// }

// let z = 5;
// for(z; z<=50; z+=5){
//     console.log(z); // Output: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50
// }

// while loops in JavaScript
// let t = 0; 
// while(t<10){ // The while loop is a control structure that allows you to repeat a block of code as long as a specified condition is true. The syntax of a while loop is as follows:
//     console.log(t);
//     t++; // Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// }
// // The while loop consists of a condition that is evaluated before each iteration. If the condition is true, the block of code inside the loop is executed. If the condition is false, the loop terminates and the program continues with the next statement after the loop.

// // do while loops in JavaScript
// let y = 5;
// do{
//     console.log(y);
//     y++; // Output: 5, 6, 7, 8, 9 
// } while(y<10);
// // The do...while loop is similar to the while loop, but it guarantees that the block of code will be executed at least once, even if the condition is false. 

// // Continue and break statements in JavaScript
// // The continue statement is used to skip the current iteration of a loop and move on to the next iteration. The break statement is used to exit a loop prematurely, 
// // regardless of whether the loop condition is true or false.

// let i = 0;
// while(i<10){
//   i++;
//   if (i==5){
//     continue; // Skip the iteration when i is equal to 5
//   }
//   console.log(i); // Output: 1, 2, 3, 4, 6, 7, 8, 9, 10
// }

// let v = 0;
// while(v<10){
//   v++;
//   if (v==5){
//     break; // Exit the loop when v is equal to 5
//   }
//   console.log(v); // Output: 1, 2, 3, 4
// }

// for(e = 1; e<=6; e++){
//   console.log(e)
// }

// for(i=0; i<=10; i++){
//   if(i%2 !==0) {
//     console.log(i);
//   } else {
//     console.log("even no!")
//   }
// }

// for(x=0; x<=10; x++){
//   if(x%2 == 0){
//     console.log(x)
//   }
// }

// let sum = 0;
// for(y=1; y<=50; y++){
//   sum    += y;
// }
// console.log("the total sum is: " + sum)

for(x=0; x<10; x++){
  console.log(x)
}
