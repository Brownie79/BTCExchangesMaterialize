//Attempt 7
$.get( "exchanges.txt")
.done(function( data ) {
    $( ".result" ).html( data );
    alert("checked it");
    document.getElementById('label').innerText = data;
})
.fail(function() {
    alert( "error" );
})
.always(function() {
    alert( "finished" );
});
