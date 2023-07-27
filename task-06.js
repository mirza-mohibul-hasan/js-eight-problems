/* Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters. */

const generageRandomPassword = (length = 8) => {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    let password = "";
    for(let i = 0; i<length; i++){
        let type = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
        if(type === 1){
            password += uppercaseLetters[Math.floor(Math.random() * (25 - 0 + 1)) + 0]
        }
        if(type === 2){
            password += lowercaseLetters[Math.floor(Math.random() * (25 - 0 + 1)) + 0]
        }
        if(type === 3){
            password += numbers[Math.floor(Math.random() * (9 - 0 + 1)) + 0]
        }
        if(type === 4){
            password += specialCharacters[Math.floor(Math.random() * (25 - 0 + 1)) + 0]
        }
    }
    return password;
}

console.log(generageRandomPassword(12))