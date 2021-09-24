
function init(){
	var nameHtml = prompt("Enter your name: ");
	var ders = document.getElementById("name")
	ders.innerHTML = "Hello " + nameHtml + "<p>Thanks for coming here.I hope you will enjoy these knowledges. While reading the website, listen to the music as below &hearts;: </p>";
	if (nameHtml == "Nga"){
		ders.innerHTML = "I love you";
	}
}


window.onload = init;