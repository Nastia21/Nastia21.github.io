alert("Введіть ваше ім'я");
var name = prompt();
if (name == "")
{
	alert("Enter nick!");
	var name = prompt();
}

window.onload = function () {

let score = 0;
	let divParent = document.createElement('div');
	divParent.className = "divParent";
    let div = document.createElement('div');  
    div.className = "headline";
    div.innerHTML = "Гра «Однорукий бандит»";
    divParent.appendChild(div);
	
	let divContainer = document.createElement('div'); 
	divContainer.className = "container";
	
	let divUser = document.createElement('div');
	divUser.className = "divUser";
	divUser.style.fontSize = '20px';
	divUser.style.fontSize = 'Consolas';
	divUser.innerHTML = name + '<p>У вас 3 спроби! <p/>';  

	divContainer.appendChild(divUser); 
	divParent.appendChild(divContainer); 
	
	
	let divCard = document.createElement('div');
	divCard.className = "divCard"; 
	
	let card1 = document.createElement('div');
	card1.className = "card1";

	var pic1 = document.createElement("IMG");
	pic1.src = "start.jpg";
	pic1.style.height = '200px';
	pic1.style.width = '200px';
	card1.appendChild(pic1); 
	
	
	let card2 = document.createElement('div');
	card2.className = "card2";
	var pic2 = document.createElement("IMG");
	pic2.src = "start.jpg";
	pic2.style.height = '200px';
	pic2.style.width = '200px';
	card2.appendChild(pic2); 
	
	
	let card3 = document.createElement('div');
	card3.className = "card3";
	var pic3 = document.createElement("IMG");
	pic3.src = "start.jpg";
	pic3.style.height = '200px';
	pic3.style.width = '200px';
	card3.appendChild(pic3); 
	
	divCard.appendChild(card1); 
	divCard.appendChild(card2); 
	divCard.appendChild(card3); 
	
	divContainer.appendChild(divCard); 
	
	
	let divButton = document.createElement('div');	
	var butPlay = document.createElement("button");
	butPlay.className = "buttonPlay";
	butPlay.style.marginTop = '20px';
	butPlay.style.background = '#6495ED';
	butPlay.innerHTML = "TRY";
	butPlay.addEventListener('click', changeCard); 
	divButton.appendChild(butPlay);

	iteration = 0;
	var array = ["sun", "rain", "snow"];
	var sizeOfArray =  array.length;


	let divScore = document.createElement('div');
	divScore.className = "score";
	divScore.innerHTML = score;


	function changeCard (){
		card1.animate([
{transform: 'rotateY(0deg)'}, 
{ transform: 'rotateY(1080deg)'}
], {
  duration: 1000,
}),

		card2.animate([
{transform: 'rotateY(0deg)'}, 
{ transform: 'rotateY(1080deg)'}
], {
  duration: 1500,
}),

		card3.animate([
{transform: 'rotateY(0deg)'}, 
{ transform: 'rotateY(1080deg)'}
], {
  duration: 1700,
}),
    cardTime(); 
}
	
	
function cardTime(){
	
	var index1 = Math.floor(Math.random() * sizeOfArray) + 0;
	var index2 = Math.floor(Math.random() * sizeOfArray) + 0;
	var index3 = Math.floor(Math.random() * sizeOfArray) + 0;
setTimeout(function () {
	//1 карточка
	if (array[index1] == "sun" )
    {
		pic1.src = "sun.jpg";
	}
	if (array[index1] == "rain" )
    {
		pic1.src = "rain.jpg";
	}
	if (array[index1] == "snow" )
    {
		pic1.src = "snow.jpg";
	}
}, 1500)
	//2 карточка
	setTimeout(function () {
	if (array[index2] == "sun" )
    {
		pic2.src = "sun.jpg";
	}
	if (array[index2] == "rain" )
    {
		pic2.src = "rain.jpg";
	}
	if (array[index2] == "snow" )
    {
		pic2.src = "snow.jpg";
	}
	}, 1700)
	//3 карточка
	setTimeout(function () {
	if (array[index3] == "sun" )
    {
		pic3.src = "sun.jpg";
	}
	if (array[index3] == "rain" )
    {
		pic3.src = "rain.jpg";
	}
	if (array[index3] == "snow" )
    {
		pic3.src = "snow.jpg";
	}
	}, 2000)
	
	iteration++;
	if (iteration == 3){
		setTimeout(function () {
        alert("Game is over");
    }, 2300);
	}
	
	//додавання балів
	setTimeout(function () {
	if((index1== 0 && index2== 0) || (index1== 0 && index3== 0) || (index2== 0 && index3== 0))
	{
		score += 100;
		divScore.innerHTML = score;
	}
	if((index1== 1 && index2== 1 ) || (index1== 1 && index3== 1 ) || (index2== 1 && index3== 1))
	{
		score += 200;
		divScore.innerHTML = score;
	}
	if((index1== 2 && index2== 2) || (index1== 2 && index3== 2) || (index2== 2 && index3== 2))
	{
		score += 150;
		divScore.innerHTML = score;
	}
	if ((index1== 0 && index2== 0 && index3== 0) || (index1== 1 && index3== 1 && index3== 1) || (index2== 2 && index3== 2 && index3== 2))
	{
		score += 300;
		divScore.innerHTML = score;
	}
	},2000)
		
}

	let rules = document.createElement('div');
	rules.style.marginTop = '1%';
	var picRule = document.createElement("IMG");

	picRule.src = "rules.jpg";
	picRule.style.height = '270px';
	picRule.style.width = '350px';

	rules.appendChild(picRule); 
	
	divContainer.appendChild(divButton); 
	divContainer.appendChild(divScore);
	divContainer.appendChild(rules); 
	divParent.appendChild(divContainer);
	document.body.append(divParent);
}

	

	