/*
배열(Array)
*/

// 배열 생성1: 내장객체(생성자함수)를 사용
console.log("==배열 생성1: 내장객체(생성자함수)를 사용====")
var a1 = new Array();
console.log(typeof(a1), a1 instanceof Array, a1.length);

// 배열을 생성할 때 크기 지정은 별 의미가 없다
// 배열은 동적으로 늘어난다.
var a2 = new Array(10);
a2[0] = 0;
a2[5] = 5;
a2[10] = 10;
a2[20] = 20;



console.log(a2, a2.length);

// 배열 생성2