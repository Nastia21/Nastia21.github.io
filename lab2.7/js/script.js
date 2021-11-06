window.onload = function () {
	let divParent = document.createElement('div');
	divParent.className = "divParent";

    let div = document.createElement('div');
    div.className = "headline";
    div.innerHTML = "Ask magic ball right now!";
	divParent.appendChild(div);
	
    let divTxt = document.createElement('div');
    divTxt.className = "txtQuestion";
    divTxt.innerHTML = 'What do you want to ask? Enter your question and then click on the ball';
    divParent.appendChild(divTxt);

	//Введення питання
	var input = document.createElement("input");
    input.type = "text";
	input.placeholder = "You can ask everything you want";
    input.className = "inputTxt"; 
	divParent.appendChild(input);
	
	//Шар
    let divShar = document.createElement("div");
    divShar.className = "shar";
    
    var buttonShake = document.createElement("button");
    buttonShake.className = "shakeTxt";
    buttonShake.innerHTML = "Shake it!";
    
    divShar.appendChild(buttonShake);
	divParent.appendChild(divShar);
	
	var arrayAnswer = ["Yes", "No", "You need to think more", "Perhaps", "Worth trying", "Surely"];
    var sizeOfArray =  arrayAnswer.length;
    
	 buttonShake.addEventListener('click', changeTxt);
	function changeTxt(){
		if(input.value === "") {
			alert( "Введіть ваше питання");
			}
			else{
				var index = Math.random()*( (sizeOfArray-1) +  0) -0;  
				setTimeout(function() {
				buttonShake.innerHTML = " ";
				buttonShake.innerHTML = arrayAnswer[index.toFixed()];
				},2000)
				}
	}

	document.body.append(divParent);
};
