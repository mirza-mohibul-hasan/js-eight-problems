/* Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value. */

const romanToInteger = roman => {
    let symbol = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        if (symbol[roman[i]] < symbol[roman[i + 1]]) {
            result -= symbol[roman[i]]
        }
        else {
            result += symbol[roman[i]]
        }
    }
    return result;
}
// console.log(romanToInteger('IV'))
// console.log(romanToInteger('IX'))
// console.log(romanToInteger('XV'))