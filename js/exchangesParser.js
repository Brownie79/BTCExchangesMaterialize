//w1d
//Attempt 7
$.get( "exchanges.txt")
.done(function( data ) {
    $( ".result" ).html( data );
    alert("file fetched!"); //prints if file fetched
    parse(data); //call works
})
.fail(function() {
    alert( "error" );
})
.always(function() {
    alert( "finished"); //prints when parser is finished, if no print, then parse didn't execute properly
});


function makeCard(name,link,image,loc,type,crypto,fiat,desc){
  var div = "";
  div = '<div class="card card-division"> <!-- CARD -->'+
          '<div class="card-image waves-effect waves-block waves-light">'+
            '<img class="activator responsive-img" src="'+image+'">'+
          '</div>'+
          '<div class="card-content">'+
            '<span class="card-title activator grey-text text-darken-4">'+
            name + '<i class="mdi-navigation-more-vert right"></i>' +
            '</span> <p>'+link+'</p>'+
          '</div>'+
          '<div class="card-reveal">'+
            '<span class="card-title grey-text text-darken-4">'+
            name+' <i class="mdi-navigation-close right"></i>'+
            '</span>'+
            '<p> Location:'+loc+'</p>'+
            '<p> Type:'+type+'</p>'+
            '<p> Crypto Currencies:'+crypto+'</p>'+
            '<p> Fiat Currencies:'+fiat+'</p>'+
            '<p> Descripton:'+desc+'</p>'+
          '</div>'+
        '</div> <!--Card End-->';
  return div;
}


function addToHTML(divArray){
  var div = "";
  for(i = 0; i<divArray.length;i++){
    div = div + divArray[i]; //make one giant string of all the cards
  }
  document.getElementById("cards").innerHTML = div;
  //following works:
  //div = "<div>Suppity sup</div>";
  //document.getElementById("cards").innerHTML = div;
  //alert('blah');
}


function parse(data){
  var array = data.split('\n'); //array of lines from exchanges.txt
  //need to trim the array for the \n char
  for(i=0;i<array.length; i++){
    //alert('"' + array[i] + '"'); //before trim
      array[i] = array[i].trim();
      //alert('"' + array[i] + '"'); //after trim
  }
  var divArray = []; //array of text file.
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
      //alert(name+"\n"+link+"\n"+image+"\n"+loc+"\n"+type+"\n"+crypto+"\n"+fiat+"\n"+desc);
      var card = makeCard(name,link,image,loc,type,crypto,fiat,desc);
      divArray[divArray.length] = card; //adds a new card at the end of the array
      alert(divArray[divArray.length]);
    } else {
      i++; //protect against INF loop
    }
  } //end while
  addToHTML(divArray);
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
