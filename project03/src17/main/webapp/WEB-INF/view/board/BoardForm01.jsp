<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<jsp:include page="/common/Header.jsp" />
</head>
<body>
	<div class='container'>
		<jsp:include page="/common/LoginPanel.jsp" />
		<h1>제품 등록</h1>
		<form class='f  orm-horizontal' role='form' action='add.do'
			method='post' enctype='multipart/form-data'>
			<div class='form-group'>
        <label for='userNo' class='col-sm-2 control-label'>사용자</label>
        <div class='col-sm-10'>
          <input type='text' class='form-control' id='userNo' name='userNo'
            placeholder='닉네임'>
        </div>
      </div>
			<div class='form-group'>
				<label for='productNo' class='col-sm-2 control-label'>제품번호</label>
				<div class='col-sm-10'>
					<input type='text' class='form-control' id='productNo' name='productNo'
						placeholder='제품번호'>
				</div>
			</div>
			<div class='form-group'>
        <label for='ifLike' class='col-sm-2 control-label'>좋아요유무</label>
        <div class='col-sm-10'>
          <input type='text' class='form-control' id='ifLike' name='ifLike'
            placeholder='제목입력세'>
        </div>
      </div>			
			<div class='form-group'>
				<label for='title' class='col-sm-2 control-label'>제목</label>
				<div class='col-sm-10'>
					<input type='text' class='form-control' id='title' name='title'
						placeholder='제목입력세'>
				</div>
			</div>
			<div class='form-group'>
				<label for='content' class='col-sm-2 control요-label'>내용</label>
				<div class='col-sm-10'>
					<input type='text' class='form-control' id='content' name='content'
						placeholder='내용을 입력하세요'>
				</div>
			</div>
			<%-- <div class='form-group'>
  <label for='mkno' class='col-sm-2 control-label'>제조사</label>
  <div class='col-sm-10'>
    <select id='mkno' name='makerNo' class='form-control'>
      <option value="0">제조사를 선택하세요</option>
      <c:forEach items="${makers}" var="maker">
        <option value="${maker.no}">${maker.name}</option>
      </c:forEach>    
    </select>
  </div>
</div> --%>
			<div class='form-group'>
				<label for='date' class='col-sm-2 control-label'>등록일</label>
				<div class='col-sm-10'>
					<input type="date" class='form-control' id='date'
						name='date' placeholder='제조일 예) 2014-12-25'>
				</div>
			</div>
			<!-- <div class='form-group'>
  <label for='photo' class='col-sm-2 control-label'>사진</label>
  <div class='col-sm-10'>
    <input type='file' class='form-control' id='photo' name='photofile'>
  </div>
</div> -->
			<div class='form-group'>
				<div class='col-sm-offset-2 col-sm-10'>
					<button id='btnAdd' type='submit' class='btn btn-primary'>등록</button>
					<button id='btnCancel' type='button' class='btn btn-primary'>취소</button>
				</div>
			</div>
		</form>
	</div>
	<script src='../js/jquery-1.11.1.js'></script>
	<script>
		$('#btnCancel').click(function() {
			history.back();
		});

		$('#btnAdd').click(function() {
			/* if ($('#name').val().length == 0) {
				alert('제품명은 필수 입력 항목입니다.');
				return false;
			}

			if ($('#qty').val().length == 0) {
				alert('수량은 필수 입력 항목입니다.');
				return false;
			}

			if ($('#mkno').val() == '0') {
				alert('제조사를 선택하세요');
				return false;
			} */
		});
	</script>
	<jsp:include page="/common/Footer.jsp" />
</body>
</html>





















