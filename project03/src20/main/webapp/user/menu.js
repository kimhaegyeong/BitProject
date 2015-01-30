$(function () {
	$("#query").keydown(function (key) {
		if (key.keyCode == 13) { 
			var keyWord = $('#query').val();
			var url ="list.jsp?searchKey=" + keyWord;
			$(location).attr('href',url);   
		}  
	});
});


$( "#barcodeBtn" ).click(function() {
	alert( "웹 페이지에서는 실행되지 않습니다." );
});


$('#loginBtn').click(function(){
	location.href = '../auth/login.html';
});


$('#logoutBtn').click(function(event){
	$.getJSON('../json/auth/logout.do', function(data){
		location.href = '../auth/login.html';
	});
});


$('#homeBtn').click(function(){
	location.href = '../user/home.html';
});

/*$('#viewBtn').click(function(){
	location.href = '../user/home.html';
});*/


$('#mypage').click(function(){
	location.href = '../user/myPage.html';
});

$('#storage').click(function(){
	location.href = '../reply/storage.html';
});

$('#community').click(function(){
	location.href = '../board/boardList.html';
});

/*$('#good').click(function(){
	location.href = '../board/boardList.html';
});

$('#bad').click(function(){
	location.href = '../board/boardList.html';
});*/

/*<!--이 스크립트를 HEAD 부분에 복사해 넣으세요-->
 * 130    페이지 로딩시 첫번째 필드의 특정 항목 자동선택 시키기  
<SCRIPT LANGUAGE="JavaScript">
<!-- Begin
function toForm() {
document.form.field1.focus();
// Replace field1 in the script with the field name of which you want to place the focus.
}
//  End -->
</script>
</HEAD>
<!--BODY 태그내에 onload="" 부분을 복사해 넣으세요-->
<BODY BGCOLOR="#FFFFFF" onLoad="toForm()">
<!--BODY 부분에 아래의 스크립트를 복사해 넣으세요-->
<FORM  NAME="form" METHOD="POST" ACTION="#">
<SELECT NAME="field1" SIZE="1">
<OPTION VALUE="one">첫번째필드-1
<OPTION VALUE="two">첫번째필드-2
</SELECT>
<BR>
<INPUT TYPE="TEXT" NAME="field2" SIZE="10"> Field 2<BR>
<INPUT TYPE="TEXT" NAME="field3" SIZE="10"> Field 3<BR>
<BR>
<INPUT TYPE="SUBMIT" NAME="submit" VALUE="Submit">  
<INPUT TYPE="RESET" onclick="toForm();">
</FORM>*/
