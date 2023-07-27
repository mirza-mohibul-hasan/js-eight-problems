/* 
Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
*/

const secondSmallest = arr => {

    let first = Number.MAX_VALUE;
    let second = Number.MAX_VALUE;

    for (let i = 0; i < arr.length && arr.length; i++) {
        if (first > arr[i]) {
            second = first
            first = arr[i]
        }
        else if (arr[i] < second && arr[i] != first) {
            second = arr[i]
        }

    };

    return second;

};

// console.log(secondSmallest([5,3,2,1,39,44,-23,-23]))
// console.log(secondSmallest([5]))