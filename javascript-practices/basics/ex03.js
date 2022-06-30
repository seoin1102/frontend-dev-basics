/* null과 undefined */

var myVar1 = undefined; //명시적으로 undefined 대입
var myVar2; //암시적으로 undefined 대입된다.
var myVar3 = null;

console.log(myVar1+":"+myVar1+":"+myVar2+":"+myVar3);
// console.log(myVar4); // not defined error
console.log(myVar1==myVar3)
console.log(myVar1===myVar3)

console.log("========================================");

// == " eqaulity, 값의 동시성, 형변환"
console.log(4 == parseInt('4'));
console.log(false==0);
console.log('abc'== new String('abc'));

console.log(true+10); // 11
console.log('abc'+ new String('abc')) //number
console.log(1+"11");
console.log("11"+1);

console.log("========================================");
// === : identity
// 1. 타입의 동일성 + 값의 동일성:기본 타입
// 2. 객체의 동일성 : 객체

console.log("2" === 2);
console.log(true === 1);
console.log(4 === 2);
console.log(new Number(4) === new Number(4));
