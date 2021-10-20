function calcDiff() {
var start = new Date(2021,0,1,0,1); //01.01.2021 00:01

//введення кінцевої дати
var num = Number(document.getElementById("num").value);//26
var mon = Number(document.getElementById("mon").value);//12
var year = Number(document.getElementById("year").value);//2021

var ho = Number(document.getElementById("ho").value);//12 
var min = Number(document.getElementById("min").value);//30


var end = new Date(); 
var numInput = end.setDate(num);
var monInput = end.setMonth(mon-1);
var yearInput = end.setYear(year);

var hoInput = end.setHours(ho);
var miInput = end.setMinutes(min); 

var diffMonth = end.getMonth() - start.getMonth();
var diffHour = end.getHours() - start.getHours();

var diffMin = end.getMinutes() - start.getMinutes();
if (diffMin<0)
{
	diffHour--;
	diffMin = 60 - (start.getMinutes() - end.getMinutes());
}

var diffDay = parseInt((end-start)/(24*60*60*1000));
alert( diffDay + " днів " + diffHour + " годин "  + diffMin + "  хвилин"  );
}





