var testo="";
/*
$(document).ready(function(){
    $("#testoCompleto").load("https://docs.google.com/document/d/e/2PACX-1vRDihSpthOhnhcIbIi7Z1OfArt2KtozYcXuglANaXJk-xDDWgN9AXM6go_HFLoCaufZjWZV5EEKpq_P/pub span");
});
*/
$.get("https://docs.google.com/document/d/e/2PACX-1vRDihSpthOhnhcIbIi7Z1OfArt2KtozYcXuglANaXJk-xDDWgN9AXM6go_HFLoCaufZjWZV5EEKpq_P/pub", function(data, status){
    document.getElementById("testoCompleto").innerHTML = data;
  });

/*
testoRaw=document.getElementById("testoCompleto").innerHTML;
document.getElementById("testo").innerHTML = testoRaw;
*/
