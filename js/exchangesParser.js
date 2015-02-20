$(document).ready(function() {
	var file = new XMLHttpRequest();
    file.open("GET", "exchanges.txt", false);	//may need to put actual file location
    file.onreadystatechange = function () {
		var obj = JSON.parse(this);				//check if "this" works
		document.getElementById("lablel").innerText = obj[0].name;		//may need .innerHTML
	};
});
