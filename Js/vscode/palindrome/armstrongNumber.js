/*function isArmstrongNumber(number) {
    const numString = number.toString();
    const numDigits = numString.length;
    let sum = 0;

    for (let digit of numString) {
        sum += Math.pow(parseInt(digit), numDigits);
    }

    return sum === number;
}


console.log(isArmstrongNumber());*/


function generateArmstrongNumbers(limit) {
    const armstrongNumbers = [];

    for (let i = 0; i <= limit; i++) {
        let num = i;
        const numStr = num.toString();
        const numDigits = numStr.length;
        let sum = 0;

        for (let digit of numStr) {
            sum += Math.pow(parseInt(digit), numDigits);
        }

        if (sum === num) {
            armstrongNumbers.push(num);
        }
    }

    return armstrongNumbers;
}


const limit = 1000;
const armstrongNumbers = generateArmstrongNumbers(limit);
console.log("Armstrong numbers up to", limit, ":", armstrongNumbers.join(', '));