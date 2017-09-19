var currentPosR;
var currentPosC;

var e1=14;
var e2=14;
var e3=14;
var e4=14;
var e5=14;
var e6=14;
var e7=14;
var e8=14;
var e9=14;

var points=0;

$(function()
{
  play();
});

function play()
{
  drawGame();
  characterInit();
  $(document).on("keyup",function(event){
    resetPrevSquare();
    var s = currentPosR;
    var t = currentPosC;
    if(event.keyCode==38)//up
    {
        if(checkBorderR(currentPosR-1)){s = currentPosR-=1;}
        $("#"+s+"-"+t).css('background-image', 'url("images/forward.png")');
    }
    else if(event.keyCode==40)//down
    {
        if(checkBorderR(currentPosR+1)){s=currentPosR+=1;}
        $("#"+s+"-"+t).css('background-image', 'url("images/back.png")');
      
    }
    else if(event.keyCode==37)//left
    {
        if(checkBorderC(currentPosC-1)){t = currentPosC-=1;}
        $("#"+s+"-"+t).css('background-image', 'url("images/left.png")');  
    }
    else if(event.keyCode==39)//right
    {
        if(checkBorderC(currentPosC+1)){t = currentPosC+=1;}
        $("#"+s+"-"+t).css('background-image', 'url("images/right.png")');

    }
    else
    {
      $("#"+s+"-"+t).css('background-image', 'url("images/forward.png")');
    }
  if(checkWin())
    {
      characterInit();
      points +=10;
      console.log("Points: " + points);
    } 
  });
  enemies();
}


function characterInit(){
  $("#1-7").css('background-image',"");
  $("#18-7").css('background-image', 'url("images/forward.png")');
  currentPosR=18;
  currentPosC=7;
}


function resetPrevSquare(){
  var s =""+currentPosR;
  var t =""+currentPosC;
  $("#"+s+"-"+t).css("background-image","");
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

function checkBorderR(num){
  if(num<19&&num>=0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function checkBorderC(num){
  if(num<15&&num>=0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function enemies(){
  //Enemy 1
  setInterval(function(){
    var pos1 = 16;
    var pos2 = e1;
    if(currentPosR==pos1&&currentPosC==pos2){gameOver();}
    if($("#16-"+(e1)).css("background-color")=="red"){gameOver();}
    $("#16-"+(e1+1)).css('background-image',"");
    $("#16-"+(e1)).css('background-image', 'url("images/red-car.png")');
    e1--;
    if(e1<-1)
    {
      e1 = 14;
    }
  },800);

  //Enemy 2
    setInterval(function(){
    var pos1 = 15;
    var pos2 = e2;
    if(currentPosR==pos1&&currentPosC==pos2){gameOver();}
    if($("#15-"+(e2)).css("background-color")=="red"){gameOver();}
    $("#15-"+(e2+1)).css('background-image',"");
    $("#15-"+(e2)).css('background-image', 'url("images/pink-car.png")');
    e2--;
    if(e2<-1)
    {
      e2 = 14;
    }
  },500);
  //Enemy 3
    setInterval(function(){
    var pos1 = 14;
    var pos2 = e3;
    if(currentPosR==pos1&&currentPosC==pos2){gameOver();}
    if($("#14-"+(e3)).css("background-color")=="red"){gameOver();}
    $("#14-"+(e3+1)).css('background-image',"");
    $("#14-"+(e3)).css('background-image', 'url("images/blue-car.png")');
    e3--;
    if(e3<-1)
    {
      e3 = 14;
    }
  },450);
  //Enemy 4
    setInterval(function(){
    var pos1 = 11;
    var pos2 = e4;
    if(currentPosR==pos1&&currentPosC==pos2){gameOver();}
    if($("#11-"+(e4)).css("background-color")=="red"){gameOver();}
    $("#11-"+(e4+1)).css('background-image',"");
    $("#11-"+(e4)).css('background-image', 'url("images/pink-car.png")');
    e4--;
    if(e4<-1)
    {
      e4 = 14;
    }
  },200);
  //Enemy 5
    setInterval(function(){
    var pos1 = 9;
    var pos2 = e5;
    if(currentPosR==pos1&&currentPosC==pos2){gameOver();}
    if($("#9-"+(e5)).css("background-color")=="red"){gameOver();}
    $("#9-"+(e5+1)).css('background-image',"");
    $("#9-"+(e5)).css('background-image', 'url("images/red-car.png")');
    e5--;
    if(e5<-1)
    {
      e5 = 14;
    }
  },125);
  //Enemy 6
    setInterval(function(){
    var pos1 = 8;
    var pos2 = e6;
    if(currentPosR==pos1&&currentPosC==pos2){gameOver();}      
    if($("#8-"+(e6)).css("background-color")=="red"){gameOver();}
    $("#8-"+(e6+1)).css('background-image',"");
    $("#8-"+(e6)).css('background-image', 'url("images/pink-car.png")');
    e6--;
    if(e6<-1)
    {
      e6 = 14;
    }
  },100);
  //Enemy 7
    setInterval(function(){
    var pos1 = 7;
    var pos2 = e7;
    if(currentPosR==pos1&&currentPosC==pos2){gameOver();}      
    if($("#7-"+(e7)).css("background-color")=="red"){gameOver();}
    $("#7-"+(e7+1)).css('background-image',"");
    $("#7-"+(e7)).css('background-image', 'url("images/blue-car.png")');
    e7--;
    if(e7<-1)
    {
      e7 = 14;
    }
  },150);
  //Enemy 8
    setInterval(function(){
    var pos1 = 4;
    var pos2 = e8;
    if(currentPosR==pos1&&currentPosC==pos2){gameOver();}
    $("#4-"+(e8+1)).css('background-image',"");
    $("#4-"+(e8)).css('background-image', 'url("images/red-car.png")');
    e8--;
    if(e8<-1)
    {
      e8 = 14;
    }
  },50);
  //Enemy 9
    setInterval(function(){
    var pos1 = 3;
    var pos2 = e9;
    if(currentPosR==pos1&&currentPosC==pos2){gameOver();}
    $("#3-"+(e9+1)).css('background-image',"");
    $("#3-"+(e9)).css('background-image', 'url("images/pink-car.png")');
    e9--;
    if(e9<-1)
    {
      e9 = 14;
    }
  },130);
}

function gameOver(){
  alert("GAME OVER!!! \n" + "Final Score: " + points);
  location.reload();
}

function checkWin(){
  if(currentPosR===1&&currentPosC===7)
  {
    return true;
  }
  else
  {
    return false;
  }
}

