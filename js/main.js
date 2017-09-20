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

var ne1=0;
var ne2=0;
var ne3=0;
var ne4=0;
var ne5=0;

var points = 0;

var life = 3;

$(function() {
  play();
  enemies();

});

function game() {
  drawGame();
  characterInit();
  $("#scoreTitle").html("<p id='score'>Score: "+points+"</p>");
  $(document).on("keyup",function(event){
    resetPrevSquare();
    var s = currentPosR;
    var t = currentPosC;
    if(event.keyCode==38) {
      // up
      if(checkBorderR(currentPosR-1)){s = currentPosR-=1;}
      if($("#"+s+"-"+t).css("background-image")=="none") {
        $("#"+s+"-"+t).css('background-image', 'url("images/forward.png")');
      } else {
        loseLife();
      }
    } else if(event.keyCode==40) {
      // down
      if(checkBorderR(currentPosR+1)){s=currentPosR+=1;}

      if($("#"+s+"-"+t).css("background-image")=="none") {        
        $("#"+s+"-"+t).css('background-image', 'url("images/back.png")');
      } else {
        loseLife();
      }      
    } else if(event.keyCode==37) {
      //left
      if(checkBorderC(currentPosC-1)){t = currentPosC-=1;}

      if($("#"+s+"-"+t).css("background-image")=="none") {
        $("#"+s+"-"+t).css('background-image', 'url("images/left.png")');  
      } else {
        loseLife();
      }
    } else if(event.keyCode==39) {
      //right
      if(checkBorderC(currentPosC+1)){t = currentPosC+=1;}
      if($("#"+s+"-"+t).css("background-image")=="none") {   
        $("#"+s+"-"+t).css('background-image', 'url("images/right.png")');
      } else {
        loseLife();
      }
    }
    if(checkWin()) {
      characterInit();
      points +=10;
      $("#score").html("Score: "+points);
      if(points==10) 
      {
         addNewEnemies();
      }
    } 
  });

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
  enemy1Interval = setInterval(function(){
    var pos1 = 16;
    var pos2 = e1;
    if(currentPosR==pos1&&currentPosC==pos2){loseLife();}
    $("#16-"+(e1+1)).css('background-image',"");
    $("#16-"+(e1)).css('background-image', 'url("images/red-car.png")');
    e1--;
    if(e1<-1)
    {
      e1 = 14;
    }
  },350);

  //Enemy 2
  setInterval(function(){
    var pos1 = 15;
    var pos2 = e2;
    if(currentPosR==pos1&&currentPosC==pos2){loseLife();}
    $("#15-"+(e2+1)).css('background-image',"");
    $("#15-"+(e2)).css('background-image', 'url("images/pink-car.png")');
    e2--;
    if(e2<-1)
    {
      e2 = 14;
    }
  },250);
  //Enemy 3
  setInterval(function(){
    var pos1 = 14;
    var pos2 = e3;
    if(currentPosR==pos1&&currentPosC==pos2){loseLife();}
    $("#14-"+(e3+1)).css('background-image',"");
    $("#14-"+(e3)).css('background-image', 'url("images/blue-car.png")');
    e3--;
    if(e3<-1)
    {
      e3 = 14;
    }
  },200);
  //Enemy 4
  setInterval(function(){
    var pos1 = 11;
    var pos2 = e4;
    if(currentPosR==pos1&&currentPosC==pos2){loseLife();}
    $("#11-"+(e4+1)).css('background-image',"");
    $("#11-"+(e4)).css('background-image', 'url("images/pink-car.png")');
    e4--;
    if(e4<-1)
    {
      e4 = 14;
    }
  },150);
  //Enemy 5
  setInterval(function(){
    var pos1 = 9;
    var pos2 = e5;
    if(currentPosR==pos1&&currentPosC==pos2){loseLife();}
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
    if(currentPosR==pos1&&currentPosC==pos2){loseLife();}      
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
    if(currentPosR==pos1&&currentPosC==pos2){loseLife();}      
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
    if(currentPosR==pos1&&currentPosC==pos2){loseLife();}
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
    if(currentPosR==pos1&&currentPosC==pos2){loseLife();}
    $("#3-"+(e9+1)).css('background-image',"");
    $("#3-"+(e9)).css('background-image', 'url("images/pink-car.png")');
    e9--;
    if(e9<-1)
    {
      e9 = 14;
    }
  },130);
}

function loseLife(){
  characterInit();
  life-=1
  if(life===2){
    $("#heart3").hide();
  }
  else if(life===1){
    $("#heart2").hide();
  }
  else{
    $("#heart1").hide();
    gameOver();
  }
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

function play(){
  $("#everything").hide();
  $("#playButton").on("mouseenter",function(){
    $("#playButton").css("color","gray");
    $("#playButton").css("cursor","pointer");
  }).on("mouseleave",function(){
    $("#playButton").css("color","white");
    $("#playButton").css("cursor","default");
  }).on("click",function(){
    $("#instructions").hide();
    $("#everything").show();
    game();
  });
}


function createRightInterval () {
  setInterval(function(){
    var pos1 = 13;
    var pos2 = ne1;
    if(currentPosR==pos1&&currentPosC==pos2){loseLife();}
    $("#13-"+(ne1)).css('background-image',"");
    $("#13-"+(ne1+1)).css('background-image', 'url("images/yellow-car.png")');
    ne1++;
    if(ne1>16)
    {
      ne1 = 0;
    }
  },350);

setInterval(function(){
    var pos1 = 12;
    var pos2 = ne2;
    if(currentPosR==pos1&&currentPosC==pos2){loseLife();}
    $("#12-"+(ne2)).css('background-image',"");
    $("#12-"+(ne2+1)).css('background-image', 'url("images/yellow-car.png")');
    ne2++;
    if(ne2>16)
    {
      ne2 = 0;
    }
  },350);

setInterval(function(){
    var pos1 = 10;
    var pos2 = ne3;
    if(currentPosR==pos1&&currentPosC==pos2){loseLife();}
    $("#10-"+(ne3)).css('background-image',"");
    $("#10-"+(ne3+1)).css('background-image', 'url("images/yellow-car.png")');
    ne3++;
    if(ne3>16)
    {
      ne3 = 0;
    }
  },350);

setInterval(function(){
    var pos1 = 6;
    var pos2 = ne4;
    if(currentPosR==pos1&&currentPosC==pos2){loseLife();}
    $("#12-"+(ne4)).css('background-image',"");
    $("#12-"+(ne4+1)).css('background-image', 'url("images/yellow-car.png")');
    ne4++;
    if(ne4>16)
    {
      ne4 = 0;
    }
  },350);

setInterval(function(){
    var pos1 = 5;
    var pos2 = ne5;
    if(currentPosR==pos1&&currentPosC==pos2){loseLife();}
    $("#5-"+(ne5)).css('background-image',"");
    $("#5-"+(ne5+1)).css('background-image', 'url("images/yellow-car.png")');
    ne5++;
    if(ne5>16)
    {
      ne5 = 0;
    }
  },350);

}

function addNewEnemies() {
  $(".toBeChanged").removeClass("grass");
  $(".toBeChanged").addClass("road");
  createRightInterval();
}

  //   enemy1Interval = setInterval(function(){
  //   var pos1 = 16;
  //   var pos2 = e1;
  //   if(currentPosR==pos1&&currentPosC==pos2){loseLife();}
  //   $("#16-"+(e1)).css('background-image',"");
  //   $("#16-"+(e1+1)).css('background-image', 'url("images/red-car.png")');
  //   e1++;
  //   if(e1>16)
  //   {
  //     e1 = 0;
  //   }
  // },350);


// function createRightInterval () {
    // setInterval(function(){
    //   var pos1 = pos1;
    //   var pos2 = 0;
    //   if(currentPosR==pos1&&currentPosC==pos2){loseLife();}
    //   $("#" + pos1 + "-" + (pos2)).css('background-image',"");
    //   $("#" + pos1 + "-" + (pos2+1)).css('background-image', 'url("images/pink-car.png")');
    //   pos2++;
    //   if(pos2 > 16)
    //   {
    //     pos2 = 0;
    //   }
    // },200);
// }


