function Activechange(idx){
  
  $(".slideshow > img").removeClass("active");
  $(".indicator > ul > li").removeClass("active");
  
  $(".slideshow").find(">img:nth-child("+ idx + ")").addClass("active");
  $(".indicator").find(">ul>li:nth-child(" + idx + ")").addClass("active");

};


$(".indicator > ul > li").click(function() {
  
  var idx = $(".indicator > ul > li").index(this)+1;
  Activechange(idx);

});


var Timer = setInterval(function(){
  
  var idx = $(".indicator > ul").find(".active").index() + 2;
  if (idx>$(".indicator > ul > li").length){idx = 1;}
  Activechange(idx);

}, 3000);