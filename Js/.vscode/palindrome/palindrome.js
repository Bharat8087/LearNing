const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', n => {
    const N = n.trim();

    function isPalindrome(number) {
        const strNumber = number.toString();
        const reversedStr = strNumber.split('').reverse().join('');
        return strNumber === reversedStr;
    }

    const result = isPalindrome(N);
    console.log(result);

    readline.close();
});