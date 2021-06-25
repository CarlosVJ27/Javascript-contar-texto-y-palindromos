function texto()
{
	let palabra=prompt("Escribe un texto").toLowerCase();
	palabra=palabra.replace(/ /g, "");
 
	for (var i=0;i<palabra.length;i++){
		if(palabra[i]!=palabra[palabra.length-i-1]){
			return false;
		}
	}
	return true;
}
 
if(texto())
{
	alert("Esto es palíndromo");
}else{
	alert("Esto no es palíndromo")
}