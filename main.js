var currentPosR;
var currentPosC;

var prePosR;
var prePosC;
$(function(){

  drawGame();
  characterInit();
  $(document).keydown(function(event){

    if(event.keyCode==38)//up
    {
        resetPrevSquare();
        var s =""+(currentPosR-=1);
        var t =""+(currentPosC);
        $("#"+s+"-"+t).css("background-color","red");
    }
    else if(event.keyCode==40)//down
    {
        resetPrevSquare();
        var s =""+(currentPosR+=1);
        var t =""+(currentPosC);
        $("#"+s+"-"+t).css("background-color","red");
      
    }
    else if(event.keyCode==37)//left
    {
      
        resetPrevSquare();
        var s =""+(currentPosR);
        var t =""+(currentPosC-=1);
        $("#"+s+"-"+t).css("background-color","red");
      
    }
    else if(event.keyCode==39)//right
    {
        
        resetPrevSquare();
        var s =""+(currentPosR);
        var t =""+(currentPosC+=1);
        $("#"+s+"-"+t).css("background-color","red");
    
    }
  });

});



function characterInit(){
  $("#18-7").css("background-color","red");
  currentPosR=18;
  currentPosC=7;
}

function move(){

}

function resetPrevSquare(){
  var s =""+currentPosR;
  var t =""+currentPosC;
  $("#"+s+"-"+t).css("background-color","transparent");
}

function checkBorder(){
}

function drawGame(){
  var gWidth = 15;
  var gLength = 19;
  var boardstr="";

  for(var i = 0; i < gLength; i++){
    boardstr += "<tr>";
    for(var j = 0; j < gWidth; j++)
    {
      boardstr += "<td id="+i+"-"+j+">"+"</td>";
    }
    boardstr+="</tr>";
  }
  $("#gameBoard").html(boardstr);
}












