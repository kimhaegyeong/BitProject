var currPageNo;
var maxPageNo;
var currentBoard;

//$(document).ready(function(){});
$(function(){
  
  
  loadProductList(1);
  
  $(document).on('click', '.data-row a', function(){
    loadProduct($(this).attr('data-no'));
  });
  
/*	$('#btnDelete').click(function() {
		if (window.confirm('삭제하시겠습니까?')) {
			deleteBoard(currentBoard);
		}
	});*/
  
  $(document).on('click', '#deleteBtn', function(){
	alert('정말 삭제 하시겠습니까?');
    deleteProduct($(this).attr('data-sno'))
    loadProduct(0);
  });
});

/*$(function() {
	currentBoard = getURLParameter('sno');
	loadBoardView(currentBoard);
	MoveBoard(currentBoard);

	$('#btnDelete').click(function() {
		if (window.confirm('삭제하시겠습니까?')) {
			deleteBoard(currentBoard);
		}
	});
	
	function deleteBoard(no) {
		$.getJSON('../json/storage/delete.do?no=' + no, function(data) {
			if (data.status == 'success') {
				location.href = '../product/storage.html';
			}
		});
	}*/




function setPageNo(currPageNo, maxPageNo) {
  window.currPageNo = currPageNo;
  window.maxPageNo = maxPageNo;
  
  $('#pageNo').html(currPageNo);
  
  if (currPageNo <= 1) $('#prevBtn').css('display', 'none');
  else $('#prevBtn').css('display', '');
  
  if (currPageNo >= maxPageNo) $('#nextBtn').css('display', 'none');
  else $('#nextBtn').css('display', '');
}
	
function loadProductList(pageNo) {
  if (pageNo <= 0) pageNo = currPageNo;
  
	$.getJSON('../json/storage/list.do?pageNo=' + pageNo, 
    function(data){
      setPageNo(data.currPageNo, data.maxPageNo);
      var storages = data.storages;
      
      require(['text!templates/storage-table.html'], function(html){
        var template = Handlebars.compile(html);
        $('#listDiv').html( template(data) );
      });
    });
}



























