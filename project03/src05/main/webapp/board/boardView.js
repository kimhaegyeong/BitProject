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

	// console.log('getURLParameter : ' + getURLParameter('no'));

	loadBoardView(getURLParameter('no'));	
});

$('#btnDelete').click(function() {
	if (window.confirm('삭제하시겠습니까?')) {
		deleteBoard(getURLParameter('no'));
	}
});

$('#btnUpdate').click(function() {
	location.href = 'boardUpdateForm.html?no=' + getURLParameter('no')
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

function loadBoardView(no) {
	$.getJSON('../json/board/view.do?no=' + no, function(data) {
		var board = data.board;

		
		  console.log('loadBoardView :' + no); 
		  console.log(board);
		

		require([ 'text!templates/board-view.html' ], function(html) {
			var template = Handlebars.compile(html);
			// handlebars 이용시!
			// template(출력할 변수)
			$('#listDiv').html(template(board));
		});
	});
}

function deleteBoard(no) {
	  $.getJSON('../json/board/delete.do?no=' +  no,
	    function(data){
	      if (data.status == 'success') {
	  		location.href = 'boardList.html';
	        $('#btnCancel').click();
	      }
	    });
	}

/* url parse */
function getURLParameter(name) {
	return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [
			, null ])[1]);
}