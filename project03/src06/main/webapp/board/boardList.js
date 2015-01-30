$(document).bind('pageinit', function() {
});
// $.mobile.defaultPageTransition = 'slide';

var currPageNo;
var maxPageNo;

// $(document).ready(function(){});
$(function() {
	$('#menuPanel').load('../common/panel.html');

	loadBoardList(1, 'new');

	$(document).on('click', '.data-row a', function() {
		console.log($(this).attr('data-no'));		
		plusCount($(this).attr('data-no'));
	});

	$(document).on('click', '.my-delete-btn', function() {
		deleteBoard($(this).attr('data-no'))
		loadBoard(0);
	});
});

$('#prevBtn').click(function(event) {
	if (currPageNo > 1) {
		loadBoardList(currPageNo - 1);
	}
});

$('#nextBtn').click(function(event) {
	if (currPageNo < maxPageNo) {
		loadBoardList(currPageNo + 1);
	}
});

$('#newOrder').click(function() {
	loadBoardList(1, 'new');
});

$('#viewOrder').click(function() {
	loadBoardList(1, 'count');
});

$('#recomOrder').click(function() {
	loadBoardList(1, 'reco');
});

function plusCount(bno) {
	console.log('조회수증가 ' +  bno);
	$.post('../json/board/plusCount.do' /* URL */
	, { /* 서버에 보낼 데이터를 객체에 담아 넘긴다 */
		no : bno
	}, function(result) { /* 서버로부터 응답을 받았을 때 호출될 메서드 */
		if (result.status == "success") {
			$('#btnCancel').click(); // click 이벤트 발생시킴.
			location.href = 'boardView.html?no=' + bno	;
		} else {
			alert("등록 실패!");
		}
	}, 'json' /* 서버가 보낸 데이터를 JSON 형식으로 처리 */)
	/* 서버 요청이 실패했을 때 호출될 함수 등록 */
	.fail(function(jqXHR, textStatus, errorThrown) {
		alert(textStatus + ":" + errorThrown);
	});

}

function setPageNo(currPageNo, maxPageNo) {
	window.currPageNo = currPageNo;
	window.maxPageNo = maxPageNo;

	$('#pageNo').html(currPageNo);

	if (currPageNo <= 1)
		$('#prevBtn').css('display', 'none');
	else
		$('#prevBtn').css('display', '');

	if (currPageNo >= maxPageNo)
		$('#nextBtn').css('display', 'none');
	else
		$('#nextBtn').css('display', '');
}

function loadBoardList(pageNo, orderBy) {
	if (pageNo <= 0)
		pageNo = currPageNo;

	$.getJSON('../json/board/list.do?pageNo=' + pageNo + '&orderBy=' + orderBy,
			function(data) {
				setPageNo(data.currPageNo, data.maxPageNo);
				var boards = data.boards;

				require([ 'text!templates/board-table.html' ], function(html) {
					var template = Handlebars.compile(html);
					$('#listDiv').html(template(data));
				});
			});
}
