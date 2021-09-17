var $poster_carousel;
var posterInstances;
var $posterSlidesInstance;

$(function(){
  $poster_carousel = $("#poster-carousel");
  posterInstances = M.Carousel.init($poster_carousel,
  {
    fullWidth: true,
    indicators: true
  });
  $posterSlidesInstance = M.Carousel.getInstance($poster_carousel);

setInterval(function(){
    $posterSlidesInstance.next();
}, 15000);
});


