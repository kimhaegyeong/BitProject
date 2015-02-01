var ikkosaUrl = "http://192.168.0.131:8080/project04/";

var loginUser;

$(function() {
	$.getJSON(ikkosaUrl + 'json/auth/loginUser.do', function(data) {
		if (data.status == 'fail') {
			console.log("로그인 정보 없음");
		} else {
			console.log("로그인 정보 있음");
		  //console.log(data.loginUser);
			$('#loginBtn').css('display', 'none');
			$('.logoutBtn').css('display', '');
			
			loginUser = data.loginUser;
			$('#userName').html(loginUser.name);
			/*
			 * $('#userName').click(function(){ alert('사용자 정보 조회 창으로 보낼 예정');
			 * });
			 */
		}
	});

});
