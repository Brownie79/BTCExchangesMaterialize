$.get( "exchanges.txt")
.done(function( data ) {
    $( ".result" ).html( data );
    //alert("file fetched!");
    parse(data);
})
.fail(function() {
    alert( "error in fetching file" );
})
.always(function() {
    //alert( "finished");
});

function makeCard(name,link,image,loc,type,crypto,fiat,desc){
  var div = "";
  div = '<div class="card card-division"> <!-- CARD -->'+
          '<div class="activator card-image waves-effect waves-block waves-light" style="background-image: url('+image+')">'+
            //'<img class="activator responsive-img" src="'+image+'">'+
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

function defaultCard(){
  var div = "";
  div = '<div class="card card-division"> <!-- CARD -->\
          <div class="card-image waves-effect waves-block waves-light">\
            <img class="activator responsive-img" src="images/default.jpg">\
          </div>\
          <div class="card-content">\
            <span class="card-title activator grey-text text-darken-4">\
              Name <i class="mdi-navigation-more-vert right"></i>\
            </span>\
            <p>Link To Website</p>\
          </div>\
          <div class="card-reveal">\
            <span class="card-title grey-text text-darken-4">\
              Name <i class="mdi-navigation-close right"></i>\
            </span>\
            <p>Description: </p>\
          </div>\
        </div> <!-- Card End -->';
  return div;
}

function addToHTML(divArray){
  var div = "";
  for(i = 0; i<divArray.length;i++){
    div = div + divArray[i];
  }
  document.getElementById("cards").innerHTML = div;
}


function parse(data){
  var array = data.split('\n');
  for(i=0;i<array.length; i++){
      array[i] = array[i].trim();
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
      var card = makeCard(name,link,image,loc,type,crypto,fiat,desc);
      //var card = makeCard2();
      divArray[divArray.length] = card; //adds a new card at the end of the array
      //alert("Div Array Length " + divArray[divArray.length]);
    } else {
      i++; //protect against INF loop
    }
  } //end while
  addToHTML(divArray);
}
