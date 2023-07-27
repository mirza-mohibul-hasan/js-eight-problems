/* Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. */

const positiveArraySum = arr =>{
    const sum = arr.reduce((accumulator, current) => current > 0 ? accumulator + current : accumulator)
    return sum;
}

console.log(positiveArraySum([2, -5, 10, -3, 7]))