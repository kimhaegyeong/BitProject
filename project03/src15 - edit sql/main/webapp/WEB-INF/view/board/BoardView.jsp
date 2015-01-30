<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html>
<html>
<head>
<title>My Page</title>
<meta name="viewport" content="width=device-width, initial-scale=1"
	charset="UTF-8">
<link rel="stylesheet"
	href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
<link rel="stylesheet" href="../css/red.css" />
<link rel="stylesheet" href="../css/red.min.css" />
<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
<script
	src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
<style>
.ui-grid-b {
	font-size: 8pt;
}

#title {
	font-size: 14pt;
	border: 1px solid #bababa;
}

#id {
	font-size: 10pt
}

#ddd {
	border: 1px solid #bababa;
}
</style>



</head>

<body>

	<!-- Start of first page -->
	<div data-role="page" id="foo">
		<div data-role="header" data-position="fixed">
			<h1>좋 아 요</h1>
			<a href="index.html" data-icon="bars" class="ui-btn-left"
				data-iconpos="notext"></a>
		</div>
		<!-- /header -->

		<div data-role="contetnt" data-position="fixed">
			<div id="title" class="ui-bar ui-bar-d">
				<p>${board.title}</p>
			</div>
			<div id="ddd">
				<div id="id" class="ui-bar ui-bar-d">
					<p>${board.userNo}</p>
				</div>

				<div class="ui-grid-b">
					<div class="ui-block-a">
						<div class="ui-bar ui-bar-d">
							<p>날짜: ${board.date}</p>
						</div>
					</div>

					<div class="ui-block-b">
						<div class="ui-bar ui-bar-d">
							<p>조회수 : ${board.count}</p>
						</div>
					</div>

					<div class="ui-block-c">
						<div class="ui-bar ui-bar-d">
							<p>추천수 : ${board.recommend}</p>
						</div>
					</div>
				</div>
			</div>
			<!-- aa -->

			<div id='contents'>
				<p>${board.content}</p>
			</div>
			<!-- contents -->

			<div data-role="navbar" class="nav-glyphish-example" data-grid="d"
				data-position="fixed">
				<ul>
					<li><a href="#" class="ui-btn ui-shadow ui-corner-all"
						id="twitter" data-icon="custom">Twitter</a></li>
					<li><a href="#" class="ui-btn ui-shadow ui-corner-all"
						id="facebook" data-icon="custom">Facebook</a></li>
					<li><a href="#" class="ui-btn ui-shadow ui-corner-all"
						id="kakaotalk" data-icon="custom">Kakao</a></li>
					<li><a href="#" class="ui-btn ui-shadow ui-corner-all"
						id="band" data-icon="custom">Band</a></li>
					<li><a href="#" class="ui-btn ui-shadow ui-corner-all"
						id="like" data-icon="custom">좋아요</a></li>
				</ul>
			</div>
			<!-- navbar -->

			<ul data-role="listview">
				<li data-icon="carat-u"><a href="#">이전글</a></li>
				<li data-icon="carat-d"><a href="#">다음글</a></li>
			</ul>

		</div>
		<!-- /contetnt -->

		<div data-role="footer" data-position="fixed">

			<div data-role="navbar">
				<ul>
					<!--  <li><a href="#">reply</a></li>
        <li><a href="#">delete</a></li>
        <li><a href="#">update</a></li> -->

					<li><a href="#" class="ui-btn ui-shadow ui-corner-all"
						data-role="button">reply</a></li>
					<li id='btnDelete'><a href="#"
						class="ui-btn ui-shadow ui-corner-all" data-role="button">delete</a></li>
					<li><a href="updateForm.do?no=${board.no}"
						class="ui-btn ui-shadow ui-corner-all" data-role="button">update</a></li>


				</ul>
			</div>
			<!--  /navbar -->
		</div>
		<!--  /footer -->
	</div>
	<!-- /page -->


	<script>
		/*  $('#btnCancel').click(function() {
		   location.href = 'list.do';
		 });
		 */

			$('#btnDelete').click(function() {
				if (window.confirm('삭제하시겠습니까?')) {
					location.href = 'delete.do?no=${board.no}'
				}
			});
		
	</script>



</body>
</html>












