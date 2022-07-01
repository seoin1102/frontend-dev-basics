console.log("==global object=====");

global.n = "둘리";
console.log(n, global.n);

var email = "dooly@gmail.com";
console.log(email, global.email);

console.log("==function의 객체 메소드 apply=====");
var f1 = function(){
    console.log(this);
}

f1();

// this 바꾸기
var o = {
    name: '마이콜'
}
f1.apply(o);

console.log("==function의 객체 메소드 call=====");
var f2 = function(s1, s2){
    console.log(s1 + " " + s2 + " " + this.n);
}
f2("hi", "");
f2.call(o, 'hi', 'again');

