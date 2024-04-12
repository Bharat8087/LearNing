/*let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}*/

/*let array = [1, 2, 3, 4, 5];

array.forEach(function(element) {
    console.log(element);
});*/

let myArr = [10, 20, 30, 50, 80];
let sum = 0;

myArr.forEach((item, i) => {
    sum = sum + item;
});
console.log("sum is: " +
    sum);