$(document).bind('pageinit', function() {
});
// $.mobile.defaultPageTransition = 'slide';

var currentBoard;
var prevBoard;
var nextBoard;
var reco = false;

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
	likeBtn
	$('#btnReply').click(function() {
			location.href = 'http://192.168.0.154:8080/project04/reply/reply.html?no=' + currentBoard;
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
	
	$('#likeBtn').click(function() {
		if (reco) {
			alert("이미 추천하셨습니다.");
		} else {
			plusReco(currentBoard);
			reco = true;
		}
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

function plusReco(bno) {
	// console.log('조회수증가 ' + bno);
	$.post('../json/board/plusReco.do' /* URL */
	, { no : bno
	}, function(result) { /* 서버로부터 응답을 받았을 때 호출될 메서드 */
		if (result.status == "success") {
			//console.log("추천수" + result.reco);
			$('#originReco').hide();
			$('#updateReco').html(result.reco);
		} else {
			alert("등록 실패!");
		}
	}, 'json' /* 서버가 보낸 데이터를 JSON 형식으로 처리 */)
	/* 서버 요청이 실패했을 때 호출될 함수 등록 */
	.fail(function(jqXHR, textStatus, errorThrown) {
		alert(textStatus + ":" + errorThrown);
	});
}