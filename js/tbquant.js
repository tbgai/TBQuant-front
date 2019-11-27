

/*
$(document).ready(function(){

	var customerId = sessionStorage.customerId;
   	if (customerId == undefined || customerId == "" || customerId==null) {
   		window.location.href = "./login.html";
    } 
    else{
    	console.log( customerId );
    }

});
*/


function logout(){
	
	// 清理sessionid
	sessionStorage.customerId = "";
	window.location.href = "./login.html";
}


