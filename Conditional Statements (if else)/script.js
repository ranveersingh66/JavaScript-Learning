// const candidateAge = 22;
// // If condition
// if (candidateAge >= 18) {
//   console.log("You are eligible to vote!")
// } 

// // If-Else condition
// if (candidateAge >= 18) {
//   console.log("You are eligible to vote!")
// } else {
//   console.log("You are not eligible to vote!")
// }

// nested if condition
// if (candidateAge >= 18) {
//   console.log("You are eligible to vote!")

//   if (candidateAge >= 21) {
//     console.log("You are eligible to vote and drink alcohol!")
//   }
// }
// else {

//   console.log("You are not eligible to vote or drink alcohol!")
// }

// else if ladder condition

// if (candidateAge >= 21) {
//   console.log("You are eligible to vote and drink alcohol!")
// }
// else if (candidateAge >= 18) {
//   console.log("You are eligible to vote!")
// }
// else {
//   console.log("You are not eligible to vote or drink alcohol!")
// }
 
// Grade evaluation using if else ladder
const grade = 30;

if (grade >= 90) {
  console.log("You got an A!")
}
else if (grade >= 75) {
  console.log ("You got a B!")
}
else if (grade >= 60) {
  console.log("You got a C!")
}
else {
  console.log("Need to improve!")
}

// Traffic light using if else ladder

const light = "green";
if (light === "red") {
  console.log("Stop!")
}
else if (light === "yellow") {
  console.log("Get ready!")
}
else {
  console.log("Go!")
}

// leap year using if else ladder
const year = 2030;
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log("Leap year!")
}
else {
  console.log("Not a leap year!")
}

// ternary operator

const Age = 22;
Age >= 18 ? console.log("You are eligible") : console.log("You are not eligible")
// if the condition is true, the first statement will be executed, otherwise the second statement will be executed