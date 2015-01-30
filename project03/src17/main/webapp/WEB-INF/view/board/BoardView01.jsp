<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html>
<html>
<head>
<jsp:include page="/common/Header.jsp" />
<style>
.prod-pho {
	border: 1px solid gray;
	width: 200px;
	height: 200px;
}
</style>
</head>
<body>
	<div class='container'>
		<jsp:include page="/common/LoginPanel.jsp" />
		<h1>제품 정보</h1>
		<form class='form-horizontal' role='form' action='update.do'
			method='post'>
			<div class='form-group'>
				<label for='no' class='col-sm-2 control-label'>번호</label>
				<div class='col-sm-10'>
					<input type='text' class='form-control' readonly id='no' name='no'
						value='${board.no}'>
				</div>
			</div>
			<div class='form-group'>
				<label for='title' class='col-sm-2 control-label'>제품</label>
				<div class='col-sm-10'>
					<input type='text' class='form-control' id='title' name='title'
						value='${board.title}'>
				</div>
			</div>
	</div>
	<div class='form-group'>
		<div class='col-sm-offset-2 col-sm-10'>
			<button id='btnUpdate' type='submit' class='btn btn-primary'>변경</button>
			<button id='btnDelete' type='button' class='btn btn-primary'>삭제</button>
			<button id='btnCancel' type='button' class='btn btn-primary'>취소</button>
		</div>
	</div>
	</form>
	</div>
	<script src='../js/jquery-1.11.1.js'></script>
	<script>
		$('#btnCancel').click(function() {
			location.href = 'list.do';
		});
		$('#btnDelete').click(function() {
			if (window.confirm('삭제하시겠습니까?')) {
				location.href = 'delete.do?no=${board.no}'
			}
		});
	</script>
	<jsp:include page="/common/Footer.jsp" />
</body>
</html>















