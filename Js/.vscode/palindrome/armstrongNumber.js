function isArmstrongNumber(number) {
    const numString = number.toString();
    const numDigits = numString.length;
    let sum = 0;

    for (let digit of numString) {
        sum += Math.pow(parseInt(digit), numDigits);
    }

    return sum === number;
}


console.log(isArmstrongNumber());