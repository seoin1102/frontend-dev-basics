<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"></script>
<script>
var render = function(vo, mode){
	var htmls=
		"<li data-no=''>"+	
		"<strong>"+vo.name+"</strong>"+
		"<p>"+vo.message+"</p>"+
		"<strong></strong>"+ 
		"<a href='' data-no='"+vo.no+"'>삭제</a>"+
		"</li>";
	
	$("#list-guestbook")[mode ? "append" : "prepend"](htmls);
}
var fetch = function(){
	  $.ajax({
		  url: "/ch08/api/guestbook",
  	  type: "get",
  	  dataType: "json",
  	  success: function(response){
				if(response.result!=='success'){
					console.error(response.message);
					return;
				}
				response.data.forEach(function(vo){
					render(vo, true);
				})
				
  	  }
	  })
	}
$(function(){
	  $.ajax({
		  url: "/ch08/api/guestbook",
    	  type: "get",
    	  dataType: "json",
    	  success: function(response){
				if(response.result!=='success'){
					console.error(response.message);
					return;
				}
				response.data.forEach(function(vo){
					render(vo, true);
				})
				
    	  }
	  })
	})
</script>
</head>
<body>
	<div id="guestbook">
		<h1>방명록</h1>
		<form id="add-form" action="" method="post">
			<input type="text" id="input-name" placeholder="이름"> <input
				type="password" id="input-password" placeholder="비밀번호">
			<textarea id="tx-content" placeholder="내용을 입력해 주세요."></textarea>
			<input type="submit" value="보내기" />
		</form>
		<ul id="list-guestbook"></ul>
	</div>
</body>
</html>
