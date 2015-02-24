//Attempt 7
$.get( "exchanges.txt")
.done(function( data ) {
    $( ".result" ).html( data );
    alert("checked it"); //works
    parse(data); //call works
})
.fail(function() {
    alert( "error" );
})
.always(function() {
    alert( "finished"); //annoying so switched it off //left method for reference
});

function parse(data){
  var array = data.split('\n'); //array of lines from exchagnes.txt
  alert(array.length);



  //alert(obj[0]);  works
  //document.getElementById('label').innerText = data;
}


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
