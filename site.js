//solarises the page
function solarise() {
	var body = document.getElementById("body");
	body.classList.toggle("solarised");

	//changes solariser button color
	var solariser = document.getElementById("solariser");
	if (solariser.style.backgroundColor == "lime") {
		solariser.style.backgroundColor = "red";
		localStorage.setItem("solarisePreference", JSON.stringify(false));
	} else {
		solariser.style.backgroundColor = "lime";
		localStorage.setItem("solarisePreference", JSON.stringify(true));
	}
}

//CRTifies the page
function crtify() {
	var body = document.getElementById("body");
	body.classList.toggle("crt");

	//changes CRTfier button color
	var CRTifier = document.getElementById("CRTifier");
	if (CRTifier.style.backgroundColor == "red") {
		CRTifier.style.backgroundColor = "lime";
		localStorage.setItem("CRTPreference", JSON.stringify(true));
	} else {
		CRTifier.style.backgroundColor = "red";
		localStorage.setItem("CRTPreference", JSON.stringify(false));
	}
}

//checks and changes loading settings based on localStorage
if (JSON.parse(localStorage.getItem("solarisePreference")) == true) {
	var body = document.getElementById("body");
	body.classList.add("solarised");

	var solariser = document.getElementById("solariser");
	solariser.style.backgroundColor = "lime";
}
if (JSON.parse(localStorage.getItem("CRTPreference")) == false) {
	var body = document.getElementById("body");
	body.classList.remove("crt");

	var CRTifier = document.getElementById("CRTifier");
	CRTifier.style.backgroundColor = "red";
}
console.log(JSON.parse(localStorage.getItem("solarisePreference")));
console.log(JSON.parse(localStorage.getItem("CRTPreference")));
