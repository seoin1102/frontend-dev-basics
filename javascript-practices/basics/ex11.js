/*
Array 객체 함수(Array.prototype.*)
*/

var colors = ['black', 'white', 'yellow'];
var fruits = ['apple', 'mango', 'banana'];

// concat
console.log("==concat====");
var a1 = fruits.concat(colors);
console.log(a1);

// pop, push: stack 지원 함수
var color = colors.pop();
console.log(color, colors);

colors.push('red');
console.log(colors);

// join
console.log("==join====");
var str = fruits.join(":");
console.log(str);

// reverse
console.log("==reverse====");
fruits.reverse();
console.log(fruits);

// shift
console.log("==shift====");
var numbers = [1000, 3000, 2000, 5000, 4000, 8000];
var number = numbers.shift();
console.log(number, numbers);

// slice
console.log("==slice====");
var numbers = numbers.slice(1, 3);
console.log(numbers);

// splice
// index에서 count개를 삭제한 후, 삭제된 요소를 배열을 반환
console.log("==splice(index, count");
console.log(fruits);
var fruits2 = fruits.splice(0,2);
console.log(fruits2, fruits);

// index에서 count개를 삭제하고 replace로 대체한 후, 삭제된 요소를 배열을 반환
console.log("==splice(index, count, replace)=====");
var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 3, 10);
console.log(a2, a1);

// a1.removeAt(1)
console.log("==a1.removeAt(1)====")
var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(2, 1);
console.log(a1);

// a1.insertAt(1, 10)
console.log("==a1.removeAt(1)====")
var a1 = [0, 1, 2, 3, 4];
a1.splice(1, 0, 10);
console.log(a1);