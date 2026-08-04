let P = 50000;
const R = 0.12;
const n = 1;
let T = 5;

let Amount = P * (1 + (R / n)) ** (n * T);

console.log("the compound interest is after,", T, "years:", Amount);
 