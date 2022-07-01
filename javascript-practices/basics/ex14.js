/**
 * URL다루기
 */

 var url1 = "http://www.mysite.com/user?name=둘리&no=10";

 //1. escape: URL 전부 encoding, 사용(x), deprecated
 var url2 = escape(url1);
 console.log(url2);
 
 //2. encodeURI: parameter만 encoding, 사용(ㅇ)
 var url3 = encodeURI(url1);
 console.log(url3);
 // location = encodeURI(url1);
 
 //3. encodeURIComponent: 값만 enciding해야 하는 경우, 사용(ㅇ)
 var url4 = encodeURIComponent(url1); //잘못 사용한 경우
 console.log(url4);
 
 //4. 
 //만들어야 할 URL
 var url = "http://www.mysite.com/user";
 var params = {
     name: "둘리",
     no: 10,
     email: "kickscar@gmail.com"
 };

 var toQueryString = function(o){
    var qs = [];
    for(prop in o){
        qs.push(prop + "=" + o[prop]);
    }

    return qs.join('&');

};

var url5 = url + "?" + toQueryString(params)
console.log(url5);

/*
var jQuery = function(){.......}
var $ = jQuery;

$.ajax({
    url: "",
    type: "post",
    data: toQueryString(params)
});
*/

