$('#logoutBtn').click(function(event){
  $.getJSON('/project06/json/auth/logout.do', function(data){
    location.href = '/auth/login.html';
  });
});

$('#loginBtn').click(function(event){
  location.href = '/project06/auth/login.html';
});



 $.getJSON('/project06/json/auth/loginUser.do', function(data){
  if (data.status == 'fail') {
     $('#loginBtn').css('display', '');  
    console.log("login fail"); 
    
  } else {
     $('#logoutBtn').css('display', ''); 
     console.log("login seccess");
    
    console.log(data.loginUser);
     $('#userName').html(data.loginUser.name);
    $('#userName').click(function(){
      alert('사용자 정보 조회 창으로 보낼 예정');
    });  
  }
}); 