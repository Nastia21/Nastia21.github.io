	alert("Введіть ваше ім'я");
	var name = prompt();
	if (name == "")
	{
		alert("Enter nick!");
		var name = prompt();
	} 
	alert("Введіть свою стать: Чоловік / Жінка");
	var human = prompt();
	
window.onload = function () {
	var x = document.getElementById('userName').innerHTML = name;
	
	if (human == "Чоловік"){
		var pic = document.createElement("IMG");
		pic.src = "img1.jpg";
		pic.style.height = '260px';
        pic.style.width = '260px';
		pic.style.borderRadius = '30px';
		document.getElementById("imgUser").appendChild(pic);
	}
	if (human == "Жінка"){
		var pic = document.createElement("IMG");
		pic.src = "img2.jpg";
		pic.style.height = '260px';
        pic.style.width = '260px';
		pic.style.borderRadius = '30px';
		document.getElementById("imgUser").appendChild(pic);
	} 
	var picPC = document.createElement("IMG");
		picPC.src = "img3.jpg";
		picPC.style.height = '260px';
        picPC.style.width = '260px';
		picPC.style.borderRadius = '30px';
		document.getElementById("imgComputer").appendChild(picPC);
};

	let countMy = 0;
	let countPC = 0;

function ShowNum(){	
	var numMy = (Math.random()*( 100-1)+1).toFixed();
	var numComputer = (Math.random()*( 100-1)+1).toFixed();
	var x = document.getElementById('myScore').innerHTML = numMy + " : ";
	var y =document.getElementById('computerScore').innerHTML =  " " + numComputer;

//Рандомні числа
if (Number(numMy) > Number(numComputer))
{
	countMy++;
	var rez1 = document.getElementById("pointMy").innerHTML = countMy;
}
if (Number(numMy) < Number(numComputer))
{
	countPC++;
	var rez2 = document.getElementById('pointComp').innerHTML =  countPC;
}

//Рахунок
if (rez1 == "3" || rez2 == "3")
{
document.getElementById("generate").disabled = true;

let divResult = document.createElement('div');
    divResult.className = "result";
	
if (countMy>countPC)
{
	divResult.innerHTML = "You are win! <br>Excellent!";	
}
else{
    divResult.innerHTML = "You lose <br>Try again!";
}

document.getElementById("res").appendChild(divResult);
	let butReset = document.createElement('button');
    butReset.className = "reset";
    butReset.innerHTML = "Reset";
	document.getElementById("reset").appendChild(butReset);
	butReset.addEventListener('click', resetPage);
	function resetPage(){
	setTimeout(function () {
        window.location.reload();
    }, 1500);
	}
	
}
}

