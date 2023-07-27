/* Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
 */

const stringReverse = str =>{
    let ans = "";
    for(let i = str.length-1; i>=0; i--){
        ans += str[i];
    }
    return ans;
}

// console.log(stringReverse("hello world"))