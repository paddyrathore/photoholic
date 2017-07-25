function	myFunction() {
	var x = document.getElementById("MyGrid");
	if (x.className ==="w3-row"){
		x.className = "row-padding";
	} else {
		x.className = x.className.replace("row-padding","w3-row")
	}
}

