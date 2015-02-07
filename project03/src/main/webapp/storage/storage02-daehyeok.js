var currPageNo;
var maxPageNo;
var myArray = new Array();	

//$(document).ready(function(){});
$(function(){
	$("#totalCount").show();
    $(".editing").hide();
    $(".liCheckbox").hide();
    $(".totalCheck").hide();
    $(".beforeEdit").show();
    $("#totalSelect").hide();
		
  loadStorageList(1);
  
  $(document).on('click', '.data-row a', function(){
    loadStorage($(this).attr('data-no'));
  });
  
  $(document).on('click', '#deleteBtn', function(){
	//alert('정말 삭제 하시겠습니까?');
	 //console.log('aaa', $('.liCheckbox').index(this));
    //if($('.liCheckbox').is(':checked')){
    	
    	console.log("체크");
    	for(var i in myArray){
    		console.log("파라미터값==>",myArray[i]);
    		//deleteStorage(myArray[i]);
    	}
    //} 
  	
  });
  
});

/*클릭할 때 마다 sno값 배열에 담기*/
$(document).on("click", ".liCheckbox", function(){
	if($('.liCheckbox').is(':checked')){
	console.log("sno 값",$(this).attr('data-sno'));
	myArray.push($(this).attr('data-sno'));
	}
	else{
		myArray.pop($(this).attr('data-sno'));
		console.log("sno 값",$(this).attr('data-sno'));
	}
	/*배열에 있는 sno 확인*/
	for(var i in myArray) {
		console.log(myArray[i]);
	}

	
	
	
	
});





$("#editBtn").click(function() {
	$('#roundedOne').attr('display','');
	$("#totalCount").hide();
	$(".beforeEdit").hide();
	$(".liCheckbox").show();
	$(".totalCheck").show();
	$("#totalSelect").show();

	$("#moveEdit").animate({
		left : '30px'
	});
	$(".moveDiv").animate({
		left : '30px'
	});
	$(".editing").show();
});

$("#completeBtn").click(function() {
	$("#totalCount").show();
	$(".editing").hide();
	$(".liCheckbox").hide();
	$(".totalCheck").hide();
	$("#totalSelect").hide();

	$("#moveEdit").animate({
		left : '30px'
	});
	$(".moveDiv").animate({
		left : '30px'
	});
	$(".beforeEdit").show();
});

$("#my-checkbox").click(function() {
	/* $("input[name=mycheck]:checkbox").attr("checked", true); */

	if ($(this).is(':checked')) {
		$("input[name=mycheck]").prop("checked", true);
	} else {
		$("input[name=mycheck]").prop("checked", false);
	}
}); 



function setPageNo(currPageNo, maxPageNo) {
  window.currPageNo = currPageNo;
  window.maxPageNo = maxPageNo;
  
  $('#pageNo').html(currPageNo);
  
  if (currPageNo <= 1) $('#prevBtn').css('display', 'none');
  else $('#prevBtn').css('display', '');
  
  if (currPageNo >= maxPageNo) $('#nextBtn').css('display', 'none');
  else $('#nextBtn').css('display', '');
}
	
function loadStorageList(pageNo) {
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

function deleteStorage(sno) { //체크된 함수파라미터를 넘길것
	//console.log(mycheck);
	$.getJSON('../json/storage/delete.do?sno=' + sno, 
			function(data){
		if(data.status == 'success') {
			console.log(data);
			loadStorageList(0);
		} else {
			console.log("deleteStorage Fail");
		}
	});
}





/*$("input[type=checkbox]").click(function(){
	if($(this).is(":checked")){
		checkedTable=$($(this)[0]).attr("id").split("checkbox")[1]-0;
		console.log(checkedTable);
	}
});*/

/*$('#btnDelete').click(function(event){
	alert("예약 취소 하시겠습니까?");
	$('#'+'tRow'+checkedTable).remove();
});*/



















