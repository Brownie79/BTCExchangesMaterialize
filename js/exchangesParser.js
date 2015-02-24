//Attempt 7
$.get( "exchanges.txt")
.done(function( data ) {
    $( ".result" ).html( data );
    alert("checked it");
})
.fail(function() {
    alert( "error" );
})
.always(function() {
    alert( "finished" );
});




/*
//Attempt 6
alert("Test Alert 9"); //js file does load into index.html
$.get( "exchanges.txt",
 	function( data ) {
		//idk what the following two lines do, I got them from:
		//http://api.jquery.com/jquery.get/
  $( ".result" ).html( data );
  alert("check it");
	})
	//should execute if works?
	.done(function() {
		alert( "second success" );
	})
	//should execute if any error
	.fail(function(response) {
		alert( "error" );
		console.log("my response is",response)
	})
	.always(function() {
		alert( "finished" );
	});
*/

/*
// Attempt 5
alert("Test Alert");
var jqxhr = $.get( "exchanges.txt", function() {
  alert( "success" );
	})
  .done(function() {
    alert( "second success" );
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "finished" );
  });
	// Perform other work here ...
	// Set another completion function for the request above
	jqxhr.always(function() {
  	alert( "second finished" );
	}

);
*/

/* I tried
$(document).ready(function()
	//var reader = new FileReader();
	readText();
	function readText(){
		var reader = new FileReader();
		reader.onload = function(e) {
			var output = e.target.result;
			document.getElementById('label').innerHTML = output;
			reader.readAsText('exchanges.txt')
		}
	}
)};
*/

/*
$(document).ready(function() {
	document.getElementById("label").innerText = "Test John"; //works
	var file = new XMLHttpRequest();
    file.open("GET", "exchanges.txt", false);	//may need to put actual file location
    file.onreadystatechange = function () {
		var obj = JSON.parse(this);				//check if "this" works
		document.getElementById("label").innerText = obj[0].name;		//may need .innerHTML
	};
});
*/
/*
$(document).ready(function() { //Does funtion() when file loads
	alert("Test1"); //works
	var request = new XMLHttpRequest();
	request.open("GET","exchanges.txt",false);
	request.onreadystatechange = function() {
		if(request.status===200 && request.readyState---4){
			var words = request.responseText.split(' ');
			alert(words[0]);
		}
	}
});
*/
