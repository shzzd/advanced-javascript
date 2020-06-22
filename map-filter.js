const numbers = [1,2,3,4,5,6];
// console.log(numbers);
// const array = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const double = element*element;
//     array.push(double);
// }
// console.log(array);

// function square(i) {
//     return i*i;
// }
const sqr = x => x*x;

// const d = numbers.map(function(e,index,array) {
//     console.log(e,index,array);
//     return e*e;
// })

const d2 = numbers.map(x=>x*x);

// const result = numbers.map(square);
const double = numbers.map(sqr);

// console.log(d);
console.log(d2);

const bigger = numbers.filter(x => x>3);
console.log('Elements that greater than 3: ',bigger);

const big = numbers.find(x => x>3);
console.log('Give an element greater than 3: ',big);
