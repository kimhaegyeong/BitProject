$(document).bind('pageinit', function() {
});
// $.mobile.defaultPageTransition = 'slide';

var currentBoard;
var prevBoard;
var nextBoard;

// $(document).ready(function(){});
$(function() {
	$('#menuPanel').load('../common/panel.html');

	// console.log('getURLParameter : ' + getURLParameter('no'));
	currentBoard = getURLParameter('no');
	loadBoardView(currentBoard);
	MoveBoard(currentBoard);

	$('#btnDelete').click(function() {
		if (window.confirm('삭제하시겠습니까?')) {
			deleteBoard(currentBoard);
		}
	});

	$('#btnUpdate').click(function() {
		location.href = 'boardUpdateForm.html?no=' + currentBoard;
	});

	$('#prevBoardBtn').click(function(event) {
		location.href = 'boardView.html?no=' + prevBoard;
	});

	$('#nextBoardBtn').click(function(event) {
		location.href = 'boardView.html?no=' + nextBoard;
	});
});

function loadBoardView(no) {
	$.getJSON('../json/board/view.do?no=' + no, function(data) {
		var board = data.board;

		//console.log('loadBoardView :' + no);
		//console.log(board.ifLike);

		loadIfLikeHeader(board.ifLike);
		
		require([ 'text!templates/board-view.html' ], function(html) {
			var template = Handlebars.compile(html);
			// handlebars 이용시!
			// template(출력할 변수)
			$('#listDiv').html(template(board));
			yyyyMMddView(board.date);
		});
		$('#boardWrite').page('destroy').page();
	});
}

function deleteBoard(no) {
	$.getJSON('../json/board/delete.do?no=' + no, function(data) {
		if (data.status == 'success') {
			location.href = '../board/boardList.html';
		}
	});
}

// 상단바의 제목 선택
function loadIfLikeHeader(ifLike) {
	var str;
	
	if(ifLike == true)
		str = '좋 아 요';
	if(ifLike == false)
		str = '나 빠 요';
	
	$('#ifLikeHeader').html(str);
}

/* url parse */
function getURLParameter(name) {
	return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [
			, null ])[1]);
}

/* 날짜 포맷 */
function yyyyMMddView(date) {
	if (date) {
		var date = new Date(date);
		var str = date.getFullYear() + '/';

		if (date.getMonth() < 9)
			str += '0';
		str += (date.getMonth() + 1) + '/';

		if (date.getDate() < 10)
			str += '0';
		str += date.getDate() + " ";

		if (date.getHours() < 10)
			str += '0';
		str += date.getHours() + ":";

		if (date.getMinutes() < 10)
			str += '0';
		str += date.getMinutes();

		$('#dateFormat').html(str);

	} else {
		return '';
	}
}

function MoveBoard(no) {
	$.getJSON('../json/board/moveBoard.do?no=' + currentBoard, function(data) {
		if (data.status == 'success') {
			console.log("이전 게시글 : " + data.prevBoard);
			console.log("다음 게시글 : " + data.nextBoard);
			
			prevBoard = data.prevBoard;
			nextBoard = data.nextBoard;
			
			if ( prevBoard == 0)
				$('#prevBoardBtn').css('display', 'none');
			else
				$('#prevBoardBtn').css('display', '');

			if ( nextBoard == 0)
				$('#nextBoardBtn').css('display', 'none');
			else
				$('#nextBoardBtn').css('display', '');
		}
	});	
}
