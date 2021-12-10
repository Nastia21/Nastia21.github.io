alert("Введіть ваше ім'я");
var name = prompt();
if (name == "")
{
	alert("Enter nick!");
	var name = prompt();
}

window.onload = function () {
	var countUser = 0;
	var countPC = 0;
	var iteration = 0;

	let divParent = document.createElement('div');
	divParent.className = "divParent";
    let div = document.createElement('div');  // див для заголовка
    div.className = "headline";
    div.innerHTML = "Play '21' right now!";
    divParent.appendChild(div);
	
	
	let divContainer = document.createElement('div'); //контейнер для юзер и комп
	divContainer.className = "container";
	
	let divUser = document.createElement('div');
	divUser.className = "divUser";
	divUser.style.fontSize = '20px';
	divUser.style.fontSize = 'Consolas';
	divUser.innerHTML = name; //тут на нейм поменять!!!!!!1
	divContainer.appendChild(divUser); 
	
	//аватарка пользователя
	var pic = document.createElement("IMG");
	pic.src = "user.jpg";
	pic.style.height = '200px';
	pic.style.width = '200px';
	pic.style.borderRadius = '30px';
	divUser.appendChild(pic);
	
	let divComputer = document.createElement('div');
	divComputer.className = "divComputer";
	divComputer.innerHTML = "Computer";
	divComputer.style.fontSize = '20px';
	divComputer.style.fontSize = 'Consolas';
	divContainer.appendChild(divComputer);
	divParent.appendChild(divContainer);
	
	//аватарка компьютера
	var picC = document.createElement("IMG");
	picC.src = "computer.jpg";
	picC.style.height = '200px';
	picC.style.width = '200px';
	picC.style.borderRadius = '30px';
	divComputer.appendChild(picC);
	
		
	var arrayCard = ["6", "7", "8", "9", "10", "Валет", "Дама", "Король", "Туз"];
	var sizeOfArray =  arrayCard.length;
	
	let divButton = document.createElement('div');
	var butPlay = document.createElement("button");
	butPlay.className = "buttonPlay";
	butPlay.innerHTML = "PLAY";
	butPlay.addEventListener('click', changeCard);
	
		
	divButton.appendChild(butPlay);
	divParent.appendChild(divButton);
	
	
	let divCards = document.createElement('div');
	divCards.className = "card";
	
	
	let cardUser = document.createElement('div');
	cardUser.className = "cardUser"; 
	let pointUser = document.createElement('div'); // счетчик для человека
	pointUser.innerHTML = countUser;
	pointUser.style.color = 'white';
	pointUser.style.fontSize = '30px';
	pointUser.style.textAlign = 'center';
	
	cardUser.appendChild(pointUser);
	
	var pic1 = document.createElement("IMG");
	pic1.src = "side.jpg";    // поменять на стандартную
	pic1.style.height = '300px';
	pic1.style.width = '200px';
	pic1.style.borderRadius = '15px';
	cardUser.appendChild(pic1);
	divCards.appendChild(cardUser);
	
	let cardPC= document.createElement('div');
	cardPC.className = "cardPC";
	let pointPC = document.createElement('div'); // счетчик для компьютера
	pointPC.innerHTML = countPC;
	pointPC.style.color = 'white';
	pointPC.style.fontSize = '30px';
	pointPC.style.textAlign = 'center';	
	cardPC.appendChild(pointPC);
	var pic2 = document.createElement("IMG");
	pic2.src = "side.jpg";
	pic2.style.height = '300px';
	pic2.style.width = '200px';
	pic2.style.borderRadius = '15px';
	cardPC.appendChild(pic2);
	divCards.appendChild(cardPC);
	
	divParent.appendChild(divCards);

	function changeCard(){
	var index1 = Math.floor(Math.random() * sizeOfArray) + 0; //для пользователя
	var index2 = Math.floor(Math.random() * sizeOfArray) + 0;// для компьютера

if (iteration < 3)
{
	
	if (arrayCard[index1] == "6" )
	{
	pic1.src = "six.png";
	countUser += 6;
	pointUser.innerHTML = countUser;
	}
	if (arrayCard[index1] == "7" )
	{
	pic1.src = "seven.png";
	countUser += 7;
	pointUser.innerHTML = countUser;
	}
	if (arrayCard[index1] == "8" )
	{
	pic1.src = "eight.jpg";
	countUser += 8;
	pointUser.innerHTML = countUser;
	}
	if (arrayCard[index1] == "9" )
	{
	pic1.src = "nine.jpg"
	countUser += 9;
	pointUser.innerHTML = countUser;;
	}
	if (arrayCard[index1] == "10" )
	{
	pic1.src = "ten.png";
	countUser += 10;
	pointUser.innerHTML = countUser;
	}
	if (arrayCard[index1] == "Дама")
	{
	pic1.src = "dama.jpg";
	countUser += 3;
	pointUser.innerHTML = countUser;

	}
	if (arrayCard[index1] == "Король" )
	{
	pic1.src = "king.jpg";
	countUser += 4;
	pointUser.innerHTML = countUser;

	}
	if (arrayCard[index1] == "Валет" )
	{
	pic1.src = "valet.jpg";
	countUser += 2;
	pointUser.innerHTML = countUser;
	}

	if (arrayCard[index1 ] == "Туз")
	{
	pic1.src = "tyz.png";
	countUser += 11;
	pointUser.innerHTML = countUser;
	}

	
	// смена карт для компьютера
    if (arrayCard[index2] == "6" )
	{
	pic2.src = "six.png";
	countPC += 6;
	pointPC.innerHTML = countPC;
	}

	if (arrayCard[index2] == "7" )
	{
	pic2.src = "seven.png";
	countPC += 7;
	pointPC.innerHTML = countPC;
	}
	if (arrayCard[index2] == "8" )
	{
	pic2.src = "eight.jpg";
		countPC += 8;
	pointPC.innerHTML = countPC;
	}
	if (arrayCard[index2] == "9" )
	{
	pic2.src = "nine.jpg";
	countPC += 9;
	pointPC.innerHTML = countPC;
	}
	if (arrayCard[index1] == "10" )
	{
	pic2.src = "ten.png";
	countPC += 10;
	pointPC.innerHTML = countPC;
	}

	if (arrayCard[index2] == "Дама")
	{
	pic2.src = "dama.jpg";
	countPC += 3;
	pointPC.innerHTML = countPC;

	}

	if (arrayCard[index2] == "Король" )
	{
	pic2.src = "king.jpg";
	countPC += 4;
	pointPC.innerHTML = countPC;

	}

	if (arrayCard[index2] == "Валет" )
	{
	pic2.src = "valet.jpg";
	countPC += 2;
	pointPC.innerHTML = countPC;
	}

	if (arrayCard[index2] == "Туз")
	{
	pic2.src = "tyz.png";
	countPC += 11;
	pointPC.innerHTML = countPC;
	}
	iteration++;
}

if (iteration == 3)
	{
	if (Number(countUser) > Number(countPC))
	{
		setTimeout(function () {
        alert("You win");
    }, 1000);
	}
	if (Number(countUser) = Number(countPC))
	{
		setTimeout(function () {
        alert("Friendship won!");
    }, 1000);
	}
	
	else 	
	{
		setTimeout(function () {
        alert("You lose");
    }, 1000);
	}	
	}
	}
	document.body.append(divParent);
}



