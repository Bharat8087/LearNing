function1(10, 20);
function2();



function function1(a, b) {

    console.log("function1", a + b);

}


function function2() {

    console.log("function2");

}

function Sub(a, b) {
    let sub = a - b;
    return sub;
}

let c = Sub(10, 20);
console.log(c);
let MyArray = [1, 2, 3, 4]
MyArray.forEach(each => {
    console.log(each);
});