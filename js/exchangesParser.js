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
    alert( "finished"); //prints when parser is finished, if no print, then parse didn't execute properly
});

function parse(data){
  var array = data.split('\n'); //array of lines from exchanges.txt
  //need to trim the array for the \n char
  for(i=0;i<array.length; i++){
    //alert('"' + array[i] + '"'); //before trim
      array[i] = array[i].trim();
      //alert('"' + array[i] + '"'); //after trim
  }

  var i = 0;
  while( i < array.length){ //while array is one less than max length
    if(array[i] == "--EXCHANGE--"){
      var name   = array[i+1].split("|")[1];
      var link   = array[i+2].split("|")[1];
      var image  = array[i+3].split("|")[1];
      var loc    = array[i+4].split("|")[1];
      var type   = array[i+5].split("|")[1];
      var crypto = array[i+6].split("|")[1];
      var fiat   = array[i+7].split("|")[1];
      var desc   = array[i+8].split("|")[1];
      i = i + 9;
      alert(name+"\n"+link+"\n"+image+"\n"+loc+"\n"+type+"\n"+crypto+"\n"+fiat+"\n"+desc);
    } else {
      i++; //to stop from getting stuck in an infinite loop
    }
  }


  /*
  NEED to trim each line for the \n char
  alert('"' + array[i].trim() + '"'); //prints --EXCHANGE--
  if(array[i].trim()=="--EXCHANGE--"){
    alert("true");
  } else {
    alert("false");
  }
  */
  //alert(array.length);
  //alert(array[0]);  //--Exchange--
  //alert(array[27]); //blank space !! <-- END OF FILE
  //alert(array[28]); //undefined
  //alert(obj[0]);  works
  //document.getElementById('label').innerText = data;
}
