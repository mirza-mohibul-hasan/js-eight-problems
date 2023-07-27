/* Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers */

const twoNumbersIndices = (arr, target) =>{
    for(let i = 0; i<arr.length; i++){{
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [i, j];
            }
        }
    }

    }
}

console.log(twoNumbersIndices([1, 3, 6, 8, 11, 15], 9))