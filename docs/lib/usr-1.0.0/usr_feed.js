$(function(){

  var $storyCard = $("#storyCard");
  var $storyEls = $storyCard.children();
  function storyFadeIn(){
      $storyEls.slice(0,2).fadeTo("slow", 0.3);
      $($storyEls[1]).css("display","none");
      $storyEls.slice(2,3).fadeIn("slow");
  }
  function storyFadeOut(){
      $($storyEls[2]).css("display","none");
      $($storyEls[1]).css("display","block");
      $storyEls.slice(0,2).fadeTo("slow", 1);

  }

})

