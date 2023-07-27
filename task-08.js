/* 
Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
*/

const secondSmallest = arr => {

    let smallest = Number.MAX_VALUE;
    let secondSmallest = Number.MAX_VALUE;

    for (let i = 0; i < arr.length && arr.length > 1; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest
            smallest = arr[i]
        }
        else if (arr[i] < secondSmallest && arr[i] > smallest) {
            secondSmallest = arr[i]
        }

    };

    return secondSmallest;

};

// console.log(secondSmallest([5,3,2,1,39,44,-23,-23]))
// console.log(secondSmallest( [19,30,190,20,2,56,60]))
// console.log(secondSmallest([12, 13, 1, 10, 34, 1]))
// console.log(secondSmallest([5]))