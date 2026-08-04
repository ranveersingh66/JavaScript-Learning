// assignment operator
const a = 10;
const b = 5;
const sum = a+b; // addition
console.log("a+b =", sum); // addition
// + (addition operator)
// - (subtraction operator)
// * (multiplication operator)
// / (division operator)
// % (modulus operator)
// ** (exponentiation operator)

// ++ (increment operator)
let abc = 15;
abc++; // (or) abc = abc + 1;
console.log(abc);

// -- (decrement operator)
let zyx = 45;
zyx--; // (or) zyx = zyx - 1;
console.log("zyx-- =", zyx);

// post increment operator
// a: operand
// ++ : operator
let q = 10;
console.log(q); 
console.log(q++); // logs 10, then increments q to 11 in the next line
console.log(q)

// pre increment operator
let p = 10;
console.log(p);
console.log(++p); // increments p to 11, then logs 11 in the same line

// exponential operator
let base = 2;
let exponent = 3;  
const result = base ** exponent;
console.log(result); // logs 8

// SHORT HAND OPERATORS
//a = a + b;     a += b;
let u = 10;
let w = 5;
u+=w; 
console.log(u)

// a = a - b;     a -= b;
// a = a * b;     a *= b;
// a = a / b;     a /= b;
// a = a % b;     a %= b;
// a = a ** b;    a **= b;

// comparison operators (==)
let x = 10;
let y = 5;
console.log(x == y); // logs false

// (===) strict equality operator, compares between two values and their data types
console.log(x === y); // logs false

// (!=) Not equal operator, compares between two values and returns true if they are not equal
console.log(x != y); // logs true

// (!==) Strict not equal operator, compares between two values and their data types
console.log(x !== y); // logs true

// (<) Less than operator, compares between two values and returns true if the first is less than the second
console.log(x < y); // logs false

// (>) Greater than operator, compares between two values and returns true if the first is greater than the second
console.log(x > y); // logs true

// (<=) Less than or equal operator, compares between two values and returns true if the first is less than or equal to the second
console.log(x <= y); // logs false

// (>=) Greater than or equal operator, compares between two values and returns true if the first is greater than or equal to the second
console.log(x >= y); // logs true


// logical operators