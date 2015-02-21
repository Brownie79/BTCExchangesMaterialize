$(document).ready(function() { //Does funtion() when file loads
	//alert("Test1"); //works

});




/*
$(document).ready(function() {
	var file = new XMLHttpRequest();
    file.open("GET", "exchanges.txt", false);	//may need to put actual file location
    file.onreadystatechange = function () {
		var obj = JSON.parse(this);				//check if "this" works
		document.getElementById("lablel").innerText = obj[0].name;		//may need .innerHTML
	};
});
*/

/*

var request = new XMLHttpRequest();
request.open("GET","exchanges.txt",false);
request.onreadystatechange = function() {
	if(request.status===200 && request.readyState---4){
		var words = request.responseText.split(' ');
		alert(words[0]);
	}
}

*/
