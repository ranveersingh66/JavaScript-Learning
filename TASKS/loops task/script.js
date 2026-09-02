const n = 12;
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

let factor = n
for(factor=1; factor<=n; factor++){
  if(n%factor === 0){
    console.log(factor)
  }
}

let 




