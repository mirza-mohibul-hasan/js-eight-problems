/* Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation. */

const calucaltor = (num1, num2, opeartion) =>{
    if(opeartion === '+'){
        return num1 + num2;
    }
    if(opeartion === '-'){
        return num1 - num2;
    }
    if(opeartion === '*'){
        return num1 * num2;
    }
    if(opeartion === '/'){
        return num1 / num2;
    }
}
// console.log(calucaltor(3, 2, '+'))
// console.log(calucaltor(3, 2, '-'))
// console.log(calucaltor(3, 2, '*'))
// console.log(calucaltor(3, 2, '/'))