// Write a JavaScript program to find the most frequent element in an array and return it. 

const frequentElement = (arr) =>{
    let most = [];
    for(let i = 0; i<arr.length; i++){
        let count = 0;
        for(let j = 0; j<arr.length; j++){
            if(arr[i] === arr[j]){
                ++count;
            }
        }
        most[i] = count;
    }

    let max = most[0];
    for( num of most){
        if(num>max){
            max = num;
        }
    }
    for( let i = 0; i<arr.length; i++){
        if(most[i] === max){
            return arr[i];
        }
    }
    return most;
}

let arr = [3, 5, 2, 5, 3, 3, 1, 4, 5, 5]
console.log(frequentElement(arr))