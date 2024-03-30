//const readline = require('readline').createInterface({
//  input: process.stdin,
//output: process.stdout
// });

/*readline.question('', n => {
    n = parseInt(n);*/
let n = 5;
for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = n - i; j > 0; j--) {
        str += ' ';
    }
    for (let j = 1; j <= i; j++) {
        str += '* ';
    }
    console.log(str);
}
readline.close();
});