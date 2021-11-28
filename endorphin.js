
var nameHtml = prompt("Enter your name: ");
function init(){
	var ders = document.getElementById("name")
	ders.innerHTML = "Hello " + nameHtml + "<p>Thanks for coming here.I hope you will enjoy these knowledges. While reading the website, listen to the music as below &hearts;: </p>";
	if (nameHtml == "Nga"){
		ders.innerHTML = "I love you";
	}
	var btn = document.getElementById("btn");
	btn.onclick = convertQuote;
}

function convertQuote(){
	var quote = document.getElementById("quote");
	quote.innerHTML = "<strong>“If you don’t make time for exercise, you’ll probably have to make time for illness.” - Robin Sharma</strong>"
	var thank = document.getElementById("btn");
	if (nameHtml == null){
		thank.innerHTML = "Have a nice day!"
	}else{
		thank.innerHTML = "Thank " + nameHtml;
	}
	
}

window.onload = init;
