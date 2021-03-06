$(document).bind('pageinit', function() {
});
// $.mobile.defaultPageTransition = 'slide';

var currentBoard;
var prevBoard;
var nextBoard;
var reco = false;
var link = document.location.href;

$("#twitter").click(function(){
	$("#twitter").attr("href", "https://twitter.com/intent/tweet?text=TEXT&url=" + link);
});

$("#facebook").click(function(){
	$("#facebook").attr("href", "http://www.facebook.com/sharer/sharer.php?u=" + link);
});


$(function(){
	Kakao.init('10024d56a79e57e162c263644cc1e6d5');

//	카카오톡 링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
	Kakao.Link.createTalkLinkButton({
		container: '#kakao-link-btn',
		label: '카카오링크 샘플에 오신 것을 환영합니다.',
		image: {
			src: 'http://dn.api1.kage.kakao.co.kr/14/dn/btqaWmFftyx/tBbQPH764Maw2R6IBhXd6K/o.jpg',
			width: '300',
			height: '200'
		},
		webButton: {
			text: '이꼭사!',
			url: 'http://192.168.0.15:8080/project06/user/home.html' // 앱 설정의 웹 플랫폼에 등록한 도메인의 URL이어야 합니다.
		}
	});

});

$(document).ready(function(){
	$("#ktalk").click(function(){
		executeURLLink();
	});
	
	$("#kstory").click(function(){
		executeKakaoStoryLink();
	});
});


$(function() {

	// console.log('getURLParameter : ' + getURLParameter('no'));
	currentBoard = getURLParameter('no');
	loadBoardView(currentBoard);
	MoveBoard(currentBoard);

	$('#btnDelete').click(function() {
		if (window.confirm('삭제하시겠습니까?')) {
			deleteBoard(currentBoard);
		}
	});

	$('#btnReply').click(function() {
		location.href = ikkosaUrl + 'reply/reply.html?no=' + currentBoard;
	});

	$('#btnUpdate').click(function() {
		location.href = ikkosaUrl + 'boardUpdateForm.html?no=' + currentBoard;
	});

	$('#prevBoardBtn').click(function(event) {
		location.href = ikkosaUrl + 'boardView.html?no=' + prevBoard;
	});

	$('#nextBoardBtn').click(function(event) {
		location.href = ikkosaUrl + 'boardView.html?no=' + nextBoard;
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
	$.getJSON(ikkosaUrl + 'json/board/view.do?no=' + no, function(data) {
		var board = data.board;

		console.log(data);
		// console.log('loadBoardView :' + no);
		// console.log(board);

		loadIfLikeHeader(board.ifLike);

		require([ 'text!templates/board-view.html' ], function(html) {
			var template = Handlebars.compile(html);
			// handlebars 이용시!
			// template(출력할 변수)
			$('#listDiv').html(template(data));
			yyyyMMddView(board.date);
		});		
		
		$('#boardWrite').page('destroy').page();		
	});
}

function deleteBoard(no) {
	$.getJSON(ikkosaUrl + 'json/board/delete.do?no=' + no, function(data) {
		if (data.status == 'success') {
			location.href = ikkosaUrl + 'board/boardList.html';
		}
	});
}

// 상단바의 제목 선택
function loadIfLikeHeader(ifLike) {
	var str;

	if (ifLike == true)
		str = '좋 아 요';
	if (ifLike == false)
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
		var str = date.getFullYear() + '.';

		if (date.getMonth() < 9)
			str += '0';
		str += (date.getMonth() + 1) + '.';

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
	$.getJSON(ikkosaUrl + 'json/board/moveBoard.do?no=' + currentBoard, function(data) {
		if (data.status == 'success') {
			console.log(data.prevBoard);
			console.log(data.nextBoard);

			if (data.prevBoard == "")
				$('#prevBoardBtn').css('display', 'none');
			else {
				prevBoard = data.prevBoard.no;
				$('#prevBoardBtn').css('display', '');
				$('#prevTitle').html(data.prevBoard.title);

				if (data.prevBoard.rcount != 0)
					$('#prevRcount').html("[" + data.prevBoard.rcount + "]");
			}

			if (data.nextBoard == "")
				$('#nextBoardBtn').css('display', 'none');
			else {
				$('#nextBoardBtn').css('display', '');
				nextBoard = data.nextBoard.no;
				$('#nextTitle').html(data.nextBoard.title);

				if (data.nextBoard.rcount != 0)
					$('#nextRcount').html("[" + data.nextBoard.rcount + "]");
			}
		}
	});
}

function plusReco(bno) {
	// console.log('조회수증가 ' + bno);
	$.post(ikkosaUrl + 'json/board/plusReco.do' /* URL */
	, {
		no : bno
	}, function(result) { /* 서버로부터 응답을 받았을 때 호출될 메서드 */
		if (result.status == "success") {
			// console.log("추천수" + result.reco);
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