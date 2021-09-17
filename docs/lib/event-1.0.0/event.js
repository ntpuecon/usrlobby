function nextEvent(){
    $eventInstance
        .next();

}
$(function(){
    $carousel = $("#card-events");
    M.Carousel.init($carousel, {
        duration: 1500,
        fullWidth: true
    });
    $eventInstance = M.Carousel.getInstance($carousel);

    setInterval(nextEvent, 10000);

});
