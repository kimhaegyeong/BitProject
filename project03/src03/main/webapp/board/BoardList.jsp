<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>    
<!DOCTYPE html>
<html>
<head>
<jsp:include page="/common/Header.jsp"/>  
</head>
<body>
<div class='container'>
<jsp:include page="/common/LoginPanel.jsp"/>  
<h1>커뮤니티</h1>
<p><a href='add.do' class='btn btn-primary'>새제품</a></p>
<table class='table table-hover'>
<tr>
  <th>#</th><th>제목</th><th>등록일</th><th>조회수</th>
</tr>
<c:forEach items="${boards}" var="board">
<tr>
  <td>${board.boardNo}</td>
  <td><a href='view.do?no=${board.boardNo}'>${board.title}</a></td>
  <td>${board.date}</td>
  <td>${board.count}</td>
</tr>
</c:forEach>

</table>
</div>
<script src='../js/jquery-1.11.1.js'></script>
<jsp:include page="/common/Footer.jsp"/> 
</body>
</html>
















