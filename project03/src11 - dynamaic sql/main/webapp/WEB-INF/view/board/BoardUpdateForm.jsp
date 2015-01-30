<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<title>게시글 작성</title>
<meta name="viewport" content="width=device-width, initial-scale=1" charset="UTF-8">
<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>

<script type="text/javascript">
$(document).bind('mobileinit',function(){
  $.mobile.selectmenu.prototype.options.nativeMenu = false;
});
</script>

<script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
<style>

.ui-select{
  margin-top: 0;
  margin-bottom: 0;
}

.ui-content {
  margin-top: 0;
  padding: 0;
}

#textarea-1 {
  height: 100px;
}



</style>

</head>

<body>

  <!-- Start of first page -->
  <div data-role="page" id="boardWrite">
    <form class='form-horizontal' role='form' action='update.do?no=${board.no}'
          method='post' enctype='multipart/form-data'>
    
    <div data-role="header">
      <a href="#" data-rel="back" data-icon="carat-l"  class="ui-btn-left" data-iconpos="notext"></a>
      <h1>게시글 작성</h1>
      <button
        class="ui-btn-right ui-btn ui-btn-b ui-btn-inline ui-mini ui-corner-all ui-btn-icon-right ui-icon-check"
        type='submit' id='btnAdd'>수정</button>
    </div>
    <!-- /header -->

    <div data-role="content">

      <select id='ifLike' name='ifLike'>
        <option value="true">좋아요</option>
        <option value="false">나빠요</option>
      </select>
      <!-- /select -->

        <input type="text" data-clear-btn="true" id='title' name='title'
          value="${board.title}">


        <textarea cols="8" rows="100" id='content' name='content'
          >${board.content}</textarea>
               
        <label for='productNo' class='col-sm-2 control-label'>제품번호</label>
        <div class='col-sm-10'>
          <input type='text' class='form-control' id='productNo' name='productNo'
            value="${board.productNo}">
        </div>
        
        
      </form>

    </div>
    <!-- /content -->

    <div data-role="footer" data-position="fixed">

      <div data-role="navbar">
    <ul>
      <li><a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-shop ui-btn-icon-top"
           data-role="button">보관함</a></li>
      <li><a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-cloud ui-btn-icon-top"
           data-role="button">사진</a></li>
      <li><a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-camera ui-btn-icon-top"
           data-role="button">카메라</a></li>
      <li><a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-action ui-btn-icon-top"
           data-role="button">공유하기</a></li>
    </ul>
  </div>

  </div>
    <!--  /footer -->

  </div>
  <!-- /page -->


<script>
    $('#btnAdd').click(function() {
      if ($('#title').val().length == 0) {
        alert('제목은 필수 입력 항목입니다.');
        return false;
      }
      /*
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


</body>
</html>
	
	





















