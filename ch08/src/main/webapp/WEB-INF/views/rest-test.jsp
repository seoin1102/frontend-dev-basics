<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath}/jquery/jquery-3.6.0.js"></script>
<script>
$(function(){
	$("#create").click(function(){
		var vo = {
			sender: "둘리",
			context: "dooly@gmail.com"
		};
		
		$.ajax({
			url: "http://192.168.10.10:8080/api/chat",
			type: "post",
			dataType: "json",
			contentType: "application/json",
			data: JSON.stringify(vo),
			success: function(response) {
				console.log(response);
			}
		});
	});
	
	$("#read").click(function(){
		$.ajax({
			url: "${pageContext.request.contextPath }/api/user/10",
			type: "get",
			dataType: "json",
			success: function(response) {
				console.log(response);
			}
		});
	});
	
	$("#update").click(function(){
		var vo = {
			name: "둘리",
			password: "12345",
			gender: "female"
		};
		
		$.ajax({
			url: "${pageContext.request.contextPath }/api/user/10",
			type: "put",
			dataType: "json",
			contentType: "application/json",
			data: JSON.stringify(vo),
			success: function(response) {
				console.log(response);
			}
		});
	});
	$("#delete").click(function(){
		$.ajax({
			url: "${pageContext.request.contextPath }/api/user/10",
			type: "delete",
			dataType: "json",
			contentType: "application/x-www-form-urlencoded",
			data: "password=1234",
			success: function(response) {
				console.log(response);
			}
		});
	});
	
	
});
</script>
</head>
<body>
	<h1>AJAX Test: Restful API</h1>
	
	<button id="create">Create(POST)</button>
	<br/><br/>

	<button id="read">Read(GET)</button>
	<br/><br/>
	
	<button id="update">Update(PUT)</button>
	<br/><br/>
	
	<button id="delete">Delete(DELETE)</button>
	<br/><br/>
	
</body>
</html>