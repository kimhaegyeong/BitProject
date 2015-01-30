$(document).bind('pageinit', function() {
});
// $.mobile.defaultPageTransition = 'slide';

$('#newOrder').click(function() {

});

var currPageNo;
var maxPageNo;

// $(document).ready(function(){});
$(function() {
	$('#menuPanel').load('../common/panel.html');

	loadBoardList(1);

	$(document).on('click', '.data-row a', function() {
/*		alert($(this).attr('data-no'));
*/
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

function loadBoardList(pageNo) {
	if (pageNo <= 0)
		pageNo = currPageNo;

	$.getJSON('../json/board/list.do?pageNo=' + pageNo, function(data) {
		setPageNo(data.currPageNo, data.maxPageNo);
		var boards = data.boards;
		
		require([ 'text!templates/board-table.html' ], function(html) {
			var template = Handlebars.compile(html);
			$('#listDiv').html(template(data));
		});
	});
}
