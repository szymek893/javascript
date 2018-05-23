function getTriangleArea(a,h){
	if((a>0) && (h>0)){
		return a * h / 2;
	}else{
		alert('Nieprawidłowe dane');
	}
}

console.log(getTriangleArea(prompt('Wpisz a'),prompt('Wpisz h')));

