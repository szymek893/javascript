var a = prompt('wpisz pierwszą liczbę');
var b = prompt('wpisz drugą liczbę');
var value = ((a * a) - (2 * a * b) + (b * b));
console.log('wynik:' + value);

if(value<0){
	console.log('wynik ujemny');
}else if(value>0){
	console.log('wynik dodatni');
}else{
	console.log('wynik równy 0');
}

