function myFunction() {
	var x = document.getElementById("nav");
	if(x.className === "navigationMenu") {
		x.className += " responsive";
	} else {
		x.className = "navigationMenu";
	}
}