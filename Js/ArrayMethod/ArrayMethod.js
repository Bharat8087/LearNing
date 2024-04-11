//push method: it is used for add to or more array


/*let fruits = ['apple', 'banana',
    'grapes'
];
fruits.push('orange');
console.log(fruits);*/

// pop method: it is used for remove the array

/*let fruits = ['apple', 'banana', 'grapes'];
let NewFruit = fruits.pop();
console.log(fruits);*/

//slice method: it is used to retrun an array which is selected to start to end

/*let fruits = ['apple', 'banana', 'grapes'];
let SliceFruits = fruits.slice(1, 2, 3);
console.log(SliceFruits);*/

/*let fruits = ['apple', 'banana', 'grapes'];
let SliceFruits = fruits.slice(1, 3);
console.log(SliceFruits);*/

//shift method : it is used for remove from first array

/*let fruits = ['apple', 'banana', 'grapes'];
let ShiftFruits = fruits.shift();
console.log(ShiftFruits);*/


//unshift method: it is used to add one or more element to starting from array

/*let fruits = ['apple', 'banana', 'grapes'];
fruits.unshift('orange');
console.log(fruits);*/

//concat method: it is used to joint array and return it

/*let fruits = ['apple', 'banana', 'grapes'];
let concatFruit = fruits.concat('mango', 'pineapple');
console.log(concatFruit);*/

//splice method : it is used for add or remove or replace an element in array

let fruits = ['apple', 'banana', 'grapes'];
let SpliceFruit = fruits.splice(1, 1, 'mango');
let NewFruit = fruits.splice(0, 0, 'pineaple');
let another = fruits.splice(1, 2, 'lemon');
let hhhh = fruits.splice(0, 2, 'watermelon')
console.log(SpliceFruit);
console.log(NewFruit);
console.log(another);
console.log(hhhh);