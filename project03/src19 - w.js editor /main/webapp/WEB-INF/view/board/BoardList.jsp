<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<title>게 시 판</title>
<meta name="viewport" content="width=device-width, initial-scale=1"
	charset="UTF-8">
<link rel="stylesheet"
	href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>

<script type="text/javascript">
	$(document).bind('mobileinit', function() {
		$.mobile.selectmenu.prototype.options.nativeMenu = false;
	});
</script>

<script
	src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>

<style>
.ui-select {
	margin-top: 0;
	margin-bottom: 0;
}

.ui-content {
	margin-top: 0;
	padding: 0;
}

#listView {
	margin-top: 0;
}

#lisrView li a {
	display: block;
	overflow: hidden;
	padding: .55em .7em;
}

.blist {
	float: left;
	width: 50px;
	height: 50px;
	position: relative;
	margin-top: .2em;
	margin-right: 10px;
	vertical-align: middle;
}

.btitle {
	font-size: 16px;
	line-height: 1.4em;
	color: #090909;
	font-weight: normal;
}

.info {
	padding-top: 2px;
	display: inline-block;
	position: relative;
	font-size: .8em;
	line-height: 1.4em;
	color: #888;
}

.ty {
	display: inline-block;
}

.tcr {
	display: inline-block;
}

.renum {
	display: inline-block;
	overflow: hidden;
	position: absolute;
	top: 11px;
	right: .8em;
	background-position: 0 -496px;
	width: 37px;
	height: 26px;
	padding: 8px 0 0 0 !important;
	font-size: .8em;
	line-height: 1em;
	color: #0ba000;
	text-align: center;
}
</style>

</head>

<body>

	<!-- Start of first page -->
	<div data-role="page" id="board">
		<div data-role="header" data-position="fixed">
			<h1>게 시 판</h1>
			<a href="index.html" data-icon="bars" class="ui-btn-left"
				data-iconpos="notext"></a>

		</div>
		<!-- /header -->

		<div data-role="content">

			<select name="select-native-1" id="select-native-1">
				<option value="true">좋아요</option>
				<option value="false">나빠요</option>
			</select>
			<!-- /select -->

			<div data-role="navbar">
				<ul>
					<li><a href="#" id='newOrder'>최신순</a></li>
					<li><a href="#" id='viewOrder'>조회순</a></li>
					<li><a href="#" id='recomOrder'>추천순</a></li>
				</ul>
			</div>
			<!--  /navbar -->

			<!-------------- 리스트 시작 ------------------>
			<ul data-role="listview" data-icon="false" data-split-theme="d"
				id='listView'>
				<!--------------개별 리스트------------------------>
				<c:forEach items="${boards}" var="board">
					<li class><a href=view.do?no=${board.no}
						' data-transition="flow">
							<div class="blist">
								<img src="../image/iphone.jpg" width="50" height="50"> <span
									class='mask'></span>
							</div>
							<p>
								<strong Z class="btitle"> ${board.title}</strong> <br> <span
									class="info"> <span class="ty">${board.userNo} |</span>
									<span class="tcr">${board.date} |</span> <span class="tcr">조회
										${board.count} |</span> <span class="tcr">댓글
										${board.recommend} </span>
								</span>
							</p>
					</a> <a href="#" data-icon="heart" class="renum"> <span
							class="hits">추천 수</span>
					</a></li>
				</c:forEach>
			</ul>

		</div>
		<!-- /content -->

		<div data-role="footer" data-position="fixed">
			<div data-role="navbar">
				<ul>
					<li><a href="boardSearch.html"
						class="ui-btn ui-shadow ui-corner-all ui-icon-search ui-btn-icon-top"
						data-role="button">검색</a></li>
					<li><a href='add.do'
						class="ui-btn ui-shadow ui-corner-all ui-icon-edit ui-btn-icon-top"
						data-role="button">글쓰기</a></li>
				</ul>
			</div>

      <!-- 페이지 바 -->
			<div id='pagingBar'>

				<c:if test="${!empty prevPageNo}">
					<a href='list.do?pageNo=${prevPageNo}' class='btn btn-default'>이전</a>
				</c:if>

				<span>${currPageNo}</span>

				<c:if test="${!empty nextPageNo}">
					<a href='list.do?pageNo=${nextPageNo}' class='btn btn-default'>다음</a>
				</c:if>

			</div>
		</div>
		<!--  /footer -->

	</div>
	<!-- /page -->


	<script>
		$(document).bind('pageinit', function() {
		});
		$.mobile.defaultPageTransition = 'slide';
		
		$('#newOrder').click(function() {
		     
		});
	</script>

</body>
</html>














