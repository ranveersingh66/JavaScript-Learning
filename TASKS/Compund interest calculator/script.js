let P = 50000; // Principal amount
const R = 0.12; // Rate of Interest 
const n = 1; // Number of times interest applied per time period (1 for annually)
let T = 5; // Years

let Amount = P * (1 + (R / n)) ** (n * T);

console.log("the compound interest is after,", T, "years is:", Amount);
  