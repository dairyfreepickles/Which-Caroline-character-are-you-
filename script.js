$("button").click(function(){
var open = $(".open").val();
    $("p").hide();
    if (open==="open") {
  $(".results").text("you seem andventurous");
  
  
} else if(open==="leave alone") {
    $(".results").text("your the cautious type");
    

}else if (open==="go inside") {
    $(".results").text("your the foolish type");
    
}
 

});





