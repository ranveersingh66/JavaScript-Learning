const n = 153;

  console.log("Ex. Number:", n);

// Sum of first n numbers
let sum = (n*(n+1))/2
  console.log("Sum of first n numbers:", sum)

// Table of n
let tab = n
for(x=1; x<=10; x++){
  console.log(tab+"x" + x + "=" + (tab*x));
}

// prime
let prime = n
if(prime>1 && prime%1 ===0 && prime%n === 0){
  console.log("Yes!,", n, "is a prime number")
} else {
  console.log("Its not a prime number!")
}

// Factors of n
let factorsText = "";
for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    if (factorsText === "") {
      factorsText = i;
    } else {
      factors = factorsText + ", " + i;
    }
  }
}
console.log("Factors: " + factorsText);

// sum of all digits of n
let tempSum = n;
let sumOfDigits = 0;
while (tempSum > 0) {
  let digit = tempSum % 10;
  sumOfDigits = sumOfDigits + digit;
  tempSum = Math.floor(tempSum / 10);
}
console.log("Sum of its digits: " + sumOfDigits);

// armstrong number
let tempArm = n;
let armstrongSum = 0;
while (tempArm > 0) {
  let digit = tempArm % 10;
  armstrongSum = armstrongSum + (digit * digit * digit);
  tempArm = Math.floor(tempArm / 10);
}

if (armstrongSum === n) {
  console.log("Yes! Is it an Armstrong number");
} else {
  console.log("No, Its not an Armstrong number");
}
