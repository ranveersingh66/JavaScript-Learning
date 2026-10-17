// Max value in an array
function maxArr(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Sum 
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Odd numbers
function countOdds(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        // Checks if the number is not divisible by 2
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
}
