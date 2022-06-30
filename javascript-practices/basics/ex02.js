/*
변수와 자료형(Data Type)
[기본타입 (pitimitive type)]
- undefined
- number
- string
- boolean
[객체]
- object
- function
*/

var u = undefined;
var i = 10;
var s = "Hello World";
var b = true;

console.log("===기본타입[primitive, 원시]==============")
console.log("u:"+typeof(u));
console.log("i:"+typeof(i));
console.log("s:"+typeof(s));
console.log("b:"+typeof(b));

console.log("===객체1[object type]==============")
var i2 = new Number(10);
var s2 = new String("Hello World");
var b2 = new Boolean(true);
console.log("i2:"+typeof(i2));
console.log("s2:"+typeof(s2));
console.log("b2:"+typeof(b2));

// 원시 타입에 메소드가 호출될 때....
console.log(b.valueOf())

console.log("===객체2[function type]==============")
function f(){

}
console.log("f:"+typeof(f));