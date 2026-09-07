// Some code snippet
const a = 23;
const b = 21;
// const aPlusb = a + b;
// console.log("Result:", aPlusb);
sumation(a, b); 

// Some other code snippet
const x = 10;
const y = 12; 
// const xPlusy = x + y;
// console.log("Result:", xPlusy);
sumation(x, y);

//some other code snippet 
const k = 5;
const l = 12;
const kPlusl = k + l;
console.log("Result:", kPlusl);

// Function Declaration
function sumation(q, w){ // this function will work even if we call it before the function declaration because of hoisting
  const result = q + w;
  console.log("Result:", result);
}

// Function call
sumation(12, 20);

function greeting(name){
  console.log("Hello, welcome to our application!", name);
}
greeting("ranveer");


function subtraction(q, w){
  const result = q - w;
  console.log("result:", result);
}

subtraction(12, 5);
const m = 221;
const n = 123;
subtraction(m, n);

// Anonymous Function
//Anonymous function is a funtion withour a name. It is usually assigned to a variable or passed as an argument to another function.
// it does not follow the hoisting concept. It can only be called after it is defined.
let mul = function(b, v){
  const result = b *v;
  console.log("Multiplication result:", result);
}
console.log(mul(12, 6)); // it will return undefined because the function does not return anything. It only console logs the result.
