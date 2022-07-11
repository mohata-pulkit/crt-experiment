var i = 0;
var txt = 'cat rules.txt';
var speed = 100;

function typeWriter() {
	if (i < txt.length) {
		document.getElementById("typewriter").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
	if (i == txt.length) {
		setTimeout(loadOutput, 500);
	}
}

function loadOutput() {
    var rules = document.getElementById("rules");
    rules.style.display = "block";
}

window.onLoad = typeWriter();