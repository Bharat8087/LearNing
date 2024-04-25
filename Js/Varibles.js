/*let p = 10;
let q = 20;
var c = addition(10, 45);
var d = addition(p, q);
//const sum = "bharat
console.log("additioin is :" + c)
console.log("another addition is :" + d)


function addition(a, b) {
    return a + b;

}*/

/*for (i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        console.log( * );
        return;
    }
}*/

/*for (let i = 5; i >= 1; i--) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "  *";
    }
    console.log(line);
}*/

for (let i = 1; i <= 5; i++) {
    let line = "";

    for (let k = 5 - i; k > 0; k--) {
        line += "  ";
    }

    for (let j = 1; j <= i; j++) {
        line += "* ";
    }

    console.log(line);
}