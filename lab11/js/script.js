alert("Введіть ваше ім'я");
var name = prompt();
if (name == "")
{
	alert("Enter nick!");
	var name = prompt();
}

$(document).ready(function(){
	var numOfWord = 0;
	var plus = 0;
	var minus = 0;
	iteration = 0;
	$("#user").text( name.toString());
	//$(".numWord").text( numOfWord);
	
	var arrayWord = ["Cat", "Carrot", "Rain", "Ten", "Sun", "Pen", "Wind", "Mouse", "Box", "Zero"];
	var arrayAnswer = ["Кіт", "Морквина", "Дощ", "Десять", "Сонце", "Ручка", "Вітер", "Миша", "Коробка", "Нуль"];
	var sizeWord =  arrayWord.length;
	var sizeAnswer =  arrayAnswer.length;
	$(".numWord").text( `${numOfWord} / 10`);
	$("#plus").text( ` Правильних відповідей: ${plus}`);
	$("#minus").text( ` Неправильних відповідей: ${minus} `);

	
	
	 $('.check').click(function() {
	 if (iteration < 10)
	 {
	 var index = Math.floor(Math.random() * sizeWord) + 0; //для пользователя

     $('#word').text(arrayWord[index]);
	 
	 var x = arrayAnswer[index]; //ответ из массива правильный
	 var index2 = arrayAnswer.indexOf(String(document.getElementById('value')));
	
	 if (Number(index) == Number(index2)){
		
		 alert("true");
		
	 } 
	  else
		alert("false");
	 numOfWord++;
	 $(".numWord").text( `${numOfWord} / 10`);
	 iteration++;  
	}
		
});
	
	
	//numOfWord++;
	//$(".numWord").text( `${numOfWord} / 10`);
	
	
})



//var index1 = Math.floor(Math.random() * sizeOfArray) + 0; //для пользователя
	//var index2 = Math.floor(Math.random() * sizeOfArray) + 0;// для компьютера
