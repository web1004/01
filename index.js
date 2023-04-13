$(document).ready(function(){
  
  $(".site1").hover(function(){
    $(".txt3").stop(true,true).animate({top:"50px"},500);  //01
  },function(){
    $(".txt3").stop(true,true).animate({top:"-350px"},500);
  });

  $(".site2").hover(function(){
    $(".txt1").stop(true,true).animate({left:"20px"},500);  //02
  },function(){
    $(".txt1").stop(true,true).animate({left:"-110%"},500);
  });

  $(".site3").hover(function(){
    $(".txt4").stop(true,true).animate({left:"20px"},500);  //03
  },function(){
    $(".txt4").stop(true,true).animate({left:"-350px"},500);
  });

  $(".site4").hover(function(){
    $(".txt2").stop(true,true).animate({top:"70px"},500);  //04
  },function(){
    $(".txt2").stop(true,true).animate({top:"450px"},500);
  });

});