/* Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. */

const positiveArraySum = arr =>{
    let ans = 0;
    for(num of arr){
        if(num>0){
            ans += num;
        }
    }
    return ans;
}
// let arr = [2, -5, 10, -3, 7]
// console.log(positiveArraySum(arr))