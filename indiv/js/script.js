window.onload = function () {

let divParent = document.getElementById('div');
	divParent.className = "divParent";
    let div = document.createElement('div');  
    div.className = "headline";
    div.innerHTML = "Вітаю! <p> Оберіть будь-яку гру! </p>";
    divParent.appendChild(div);

let divContainer = document.getElementById('cont1');
	divContainer.className = "container1";

let divGame1 = document.getElementById('game1');
	divGame1.className = "game1";
var pic1 = document.getElementById('ball');
	pic1.src = "ball.png";
	pic1.id = "ball";
	pic1.style.height = '250px';
	pic1.style.width = '250px';
	pic1.style.borderRadius = '60px';
	pic1.style.marginLeft = '-20%';
	pic1.setAttribute("alt", "Магічна куля");
	pic1.setAttribute("title", "Магічна куля");
	let button1 = document.getElementById('but1');
	button1.className = "but1";	

	
	divGame1.appendChild(pic1); 


var pic2 = document.getElementById('grinch');
	pic2.src = "grinch.png";
	pic2.id = "grinch";
	pic2.style.height = '250px';
	pic2.style.width = '250px';
	pic2.style.borderRadius = '60px';
	pic2.style.marginLeft = '+20%';
	pic2.setAttribute("alt", "Гра з Грінчем");
	pic2.setAttribute("title", "Гра з Грінчем");
	divGame1.appendChild(pic2);

	divContainer.appendChild(divGame1);
	
	
	
	// 2контейнер
	let divContainer2 = document.getElementById('cont2');
	divContainer2.className = "container2";
let divGame2 = document.getElementById('game2');
	divGame2.className = "game2";
var pic3 = document.getElementById('card');
	pic3.src = "card.png";
	pic3.id = "card";
	pic3.style.height = '250px';
	pic3.style.width = '250px';
	pic3.style.borderRadius = '60px';
	pic3.style.marginLeft = '-20%';
	pic3.style.marginTop = '5%';
	pic3.setAttribute("alt", "Гра '21'");
	pic3.setAttribute("title", "Гра '21'");
	
	divGame2.appendChild(pic3); 


var pic4 = document.getElementById('weather');
	pic4.src = "weather.png";
	pic4.id = "weather";
	pic4.style.height = '250px';
	pic4.style.width = '250px';
	pic4.style.borderRadius = '60px';
	pic4.style.marginLeft = '+20%';
	pic4.style.marginTop = '5%';
	pic4.setAttribute("alt", "Прогноз погоди");
	pic4.setAttribute("title", "Прогноз погоди");
	divGame2.appendChild(pic4);

	divContainer2.appendChild(divGame2);
	
	
	
	
	
	divParent.appendChild(divContainer);
	
	divParent.appendChild(divContainer2);
	
	
 
 
	document.body.append(divParent);
}

