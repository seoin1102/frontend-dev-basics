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
// DOM Laod Event
// 1. load: 모두 다 (DOM, CSSOM, img)
// 2. DOMContentLoaded: DOM만 로딩(CSSOM x, img x)
window.addEventListener("DOMContentLoaded", function(){
	document
		.getElementById("data")
		.addEventListener("click", function(){
			var xhr = null;
		})
})
</script>
</head>
<body>
	<h1>AJAX test: text format Data: $.ajax() 함수 사용하기</h1>
	
	<button>데이터 가져오기</button>
	<div id = "data"></div>
</body>
</html>