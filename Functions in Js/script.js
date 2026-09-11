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


// Nested Functions
// A function can be defined inside another function. The inner function can access the variables of the outer function. The inner function can also be returned from the outer function and can be called outside the outer function.

function createGreeting(name){
  function sayHello(){
    return "hello, " + name;
  }
      return sayHello();
}

console.log(createGreeting("ranveer")); 

function addSquare(x, y){
  const a = square(x)
  const b = square(y)

  function square(num){
    return num*num;
  }
  return a+b
}

console.log((addSquare( 2, 3)));

function find(p, o){
  const ans = p / o
  console.log(ans);
  
}

find(12, 6)
