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

	var arrayWord = ["Childhood", "Depth", "District", "Knowledge", "Profit", "Surgeon", "To suspect", "Liberty", "Destination", "Confidence"];
	var arrayAnswer = ["Дитинство", "Глибина", "Район", "Знання", "Прибуток", "Хірург", "Підозрювати", "Свобода", "Призначення", "Впевненість"];
	var sizeWord =  arrayWord.length;
	var sizeAnswer =  arrayAnswer.length;
	$(".numWord").text( `${numOfWord} / 10`);
	$("#plus").text( ` Правильних відповідей: ${plus}`);
	$("#minus").text( ` Неправильних відповідей: ${minus} `);
		
	var indGlobal = 0;
	function appearWord(){
		var index = Math.floor(Math.random() * sizeWord) + 0; //для пользователя
		indGlobal = index;
		$('#word').text(arrayWord[index]);
	}

	appearWord();
	
	$('.check').click(function() {
		if (iteration < 10)
		{
			var res = $('#value').val();
			var index2 = arrayAnswer.indexOf(res);

			if (Number(indGlobal) == Number(index2)){
				plus++;
				 $("#plus").text( ` Правильних відповідей: ${plus}`);
				} 
				else{
					minus++;
					$("#minus").text( ` Неправильних відповідей: ${minus} `);
					}  
	 $("#value").text(" ");
	 numOfWord++;
	 $(".numWord").text( `${numOfWord} / 10`);
	 appearWord();
	 iteration++;   
	}
		if(iteration == 10)
	{
		
		setTimeout(function () {
		if(plus<5)
		{
			alert("Вам потрібно підтягнути знання!"); 	
		}
		if(plus>5 && plus <8)
		{
			alert("У вас добра база словарного запасу!"); 	
		}
		if(plus>8)
		{
			alert("Молодець! Широкий словарний запас!"); 	
		}
		},1000);
		
	}
	});
	
})
