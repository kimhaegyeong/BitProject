$(document).bind('pageinit', function() {
});
// $.mobile.defaultPageTransition = 'slide';

var range = '';
var title = true;
var content = true;
var writer = false;
var str = null;

// $(document).ready(function(){});
$(function() {
	$('#select-native-1').on('change', function() {
		// console.log($(this).val());
		range = $(this).val();
	});
	
	$('#inputSearch').keypress(function(event) {		
		console.log(str);
        if (event.keyCode == 13) { // enter 클릭시
        	//alert('Entered' + $('#inputSearch').val());

        	location.href="boardList.html?ifLike=" + range 
        	+ "&title=" + title + "&writer=" + writer + 
        	"&content=" + content + '&search=' + $('#inputSearch').val();
        }
    });

});

function selectAll() {
	var title = true;
	var content = true;
	var writer = false;
}

function selectTitle() {
	var title = true;
	var content = false;
	var writer = false;
}

function selectWriter() {
	var title = false;
	var content = false;
	var writer = true;
}

