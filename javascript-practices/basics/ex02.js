/*
변수와 자료형(Data Type)
[기본타입 (pitimitive type)]
- undefined
- number
- string
- boolean
[객체]
- object
    1.new 생성자함수() 사용해서 생성
        Number() => object타입 객체
        String() => object타입 객체
        Boolean() => object타입 객체
        Object() => object타입 객체
        Array() => object타입 객체
        Date() => object타입 객체
        Function() => function타입 객체
    2. {} 객체 리터럴, (J)ava(s)cript (o)bject (N)otation
    3. [] 배열 리터럴
    4. null
- function
    1. funcition + {} {...}
    2. var f = function() {...}
    3. var f = new Function(...);
*/

/*
자바스크립트 객체를 분류하는 또 다른 방법
1. 내장(Built-in, Native,Engi) 객체
    자바스크립트 엔진에 미리 내장되어 있는 객체
    Number, Boolean, Date, RegExp, ... :생성자 함수
    parseInt,setTimeout, setInterval, eval, ...: 일반 함수
2. 호스트 객체
    - 호스트 환경이 브라우저: document, location, XmlHttpRequest, window......
    - 호스트 환경이 node.js: os, http, fs, path, ...
3. 사용자 객체
    자바스크립트 엔진이 실행되면서 생성되는 객체들
    */ 

var u = undefined; //var u; 동일, 선언과 정의의 구부분이 없다.
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
var o = new Object();
var a = new Array();
var d = new Date();
var o2 = {};
var a2 = []; 
var n = null;

console.log("i2:"+typeof(i2));
console.log("s2:"+typeof(s2));
console.log("b2:"+typeof(b2));
console.log("o:"+typeof(o));
console.log("o2:"+typeof(o2));
console.log("a:"+typeof(a));
console.log("a2:"+typeof(a2));
console.log("d:"+typeof(d));
console.log("n:"+typeof(n));

// 원시 타입에 메소드가 호출될 때....
console.log(b.valueOf());

console.log("===객체2[function type]==============")
function f1(a, b){
    return a+b;
}

var f2 = function(a, b){
    return a+b;
}

var f3 = function(a, b){
    return a+b;
}
console.log("f:"+typeof(f));

// 원시 타입에 메소드가 호출될 때....
// 임시 Wrapper 객체가 만들어져서 메소드 호출이 일어난 뒤 사라진다: 유사 객체
console.log("===원시 타입도 메소드 호출이 가능하다? [function type]==============")
console.log(b.valueOf()); // new Boolean(b).valueOf()
console.log(b2.valueOf());