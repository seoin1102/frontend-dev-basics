/*
변수의 범위(Scope)
1. 자바스크립트는 어휘에서 변수의 범위를 알 수 있다.(Static, Lexical Scope)
2. ES6 이전(<=ES5)
    - 자바와 같이 블록({})범위를 지원하지 못했다.
    - 함수 범위를 지원한다.
    - 함수 블록 안에서 변수 앞에 var 키워드를 사용하면 함수 범위를 가진다.
    - 만약에 var 키워드가 없이 함수 안에서 변수를 정의하면 전역 범위를 가진게 된다.(hoisting)
3. ES6 이후(ES6)
    - Block Scope을 적용할 수 있는 키워드를 지원(const, let)
    - const: 상수 
    - let: 변수 
4. 결론
    const / let만 사용하고 둘 중에 하나를 *반드시* 붙히자!(안붙히면 hoisting)

*/
var i = 10;
var f = function(){
    var i = 20;
    j = 100;
    var k = 1000;
    console.log(i);
    i = j-1;
}

f();
console.log(i);
console.log(j);

console.log("==var 키워드는 함수블록에서 함수 범위를 만든다.=======")
if(90+10==100){
    var k = 20;
}

console.log(k);

{
    let x = 1000;
    const PI = 3.14;

    x = 100;
    //PI = 0; //assign error
}

// console.log(x); //not defiend error
console.log(PI);