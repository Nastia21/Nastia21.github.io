function tabIf(){	
var x = Number(document.getElementById("valFrom").value);
var y = Number(document.getElementById("valTo").value);
var s = Number(document.getElementById("step").value);

	for (let i = x; i <= y; i+=s) { 
		var formula = (1 + Math.pow(i,2)) * Math.sin(Math.abs(i));	
		var output= "Для х = "+ i.toFixed(2) + "  y = " + formula.toFixed(3);
		alert (output);
		//document.write(output);
}
}

function tab(){
var x = Number(document.getElementById("valFrom").value);
var y = Number(document.getElementById("valTo").value);
var s = Number(document.getElementById("step").value);
var i = x;
	while ( i<= y){
		var formula = (1 + Math.pow(i,2)) * Math.sin(Math.abs(i));	
		var output= "Для х = "+ i.toFixed(2) + "  y = " + formula.toFixed(3);
		alert (output);
		i+=s;
		}
}

function doTab(){
var x = Number(document.getElementById("valFrom").value);
var y = Number(document.getElementById("valTo").value);
var s = Number(document.getElementById("step").value);
var i = x;
	do{
		var formula = (1 + Math.pow(i,2)) * Math.sin(Math.abs(i));	
		var output= "Для х = "+ i.toFixed(2) + "  y = " + formula.toFixed(3);
		alert (output);
		i+=s;
		} while ( i<= y);
}




