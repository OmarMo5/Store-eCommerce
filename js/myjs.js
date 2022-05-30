function checkLogin(){
	var Username = document.getElementById("name").value;
	var Password = document.getElementById("pass").value;
	if(Username==""){
		alert("Please, Enter Your Username");
	}
	else if(Password==""){
		alert("Please, Enter Your Password");
	}
	else{
		alert("Congratulation, Enter Your Account!...");
	}
}

function checkRegister(){
	var FristName = document.getElementById("fname").value;
	var LastName  = document.getElementById("lname").value;
	var Email     = document.getElementById("email").value;
	var Password1 = document.getElementById("pass").value;
	var Password2 = document.getElementById("confirm").value;
	if(FristName==""){
		alert("Please, Enter Your First name");
	}
	else if(LastName==""){
		alert("Please, Enter Your Last name");
	}
	else if(Email==""){
		alert("Please, Enter Your Email");
	}
	else if(Password1==""){
		alert("Please, Enter Your Email");
	}
	else if(Password2==""){
		alert("Please, Enter Your Email");
	}
	else{
		alert("Congratulation, Your Account Created...");
	}
}