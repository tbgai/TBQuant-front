

$(document).ready(function(){

	// 回到login页面，则自动将sessionid清空
	sessionStorage.customerId = "";
	
	$("#login_res").hide();

});


// 判断是否敲击了Enter键 
$(document).keyup(function(event){ 
    if(event.keyCode ==13){ 
      $("#btn_login").trigger("click"); 
    } 
});

function login() {
	
	$(document).ready(function(){
	
		var uname = $("#txt_username").val();
		uname = jQuery.trim( uname );
		if ( uname.length == "" ) {
			alert("用户名不能为空");
			return;
		}
		var upwd = $("#txt_pwd").val();
		upwd = jQuery.trim( upwd );
		if ( upwd.length == "" ){
			alert( "密码不能为空" );
			return;
		}
		
		// 提交到后台进行验证，同步处理		
		// ...
		// 暂时处理
		if ( uname == "tbq" && upwd == "tbq123456" )
		{
			sessionStorage.customerId = "test123456789";
			window.location.href = "./index.html";
		}
		else
		{
			$("#login_res").text( "用户名或密码错误，请检查后重新输入" );
			$("#login_res").show();
		}
		
	});
	
}
