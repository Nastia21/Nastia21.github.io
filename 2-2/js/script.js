function checkPassw()
 {
	 var x,y;
	 x= document.getElementById("password");
	 y= document.getElementById("password_confirm");
	 if(x.value==y.value) 
	alert("Ви успішно зареєстровані!");
	 else 
	alert("Паролі не збігаються!")
}