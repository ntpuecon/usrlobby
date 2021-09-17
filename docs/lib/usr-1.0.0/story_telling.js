var $storyCard;
var $storyEls;
var cardHeight;
var $storyCarousel;
var allSlides;
var $followUsr;
var $storyCarousel2;

function storyFadeIn(){
    $storyEls.slice(0,2).fadeTo(1500, 0.3);
    $($storyEls[1]).css("display","none");
    $storyEls.slice(2,3).fadeIn("slow");
    tellStory_iter($(allSlides).first());
}
function storyFadeOut(){
    $($storyEls[2]).css("display","none");
    $($storyEls[1]).css("display","block");
    $storyEls.slice(0,2).fadeTo("slow", 1);
    setTimeout(storyFadeIn, 9000);

}
function followUsr_fadeIn(){
    $followUsr
        .fadeIn(1500)
        .delay(10000)
        .fadeOut(1500, function(){
            $storyCard
                .fadeIn(1500, storyFadeOut);
        });
}
function tellStory(){
    currentIndex = $storyCarousel.center % $storyCarousel.count;

    //$currentSlide
    $(allSlides[currentIndex])
        .fadeIn(1500)
        .delay(7000)
        .fadeOut(1500);

    $storyCarousel.next();
}

function tellStory_iter($targetSlide){
    $targetSlide
        .fadeIn(1500)
        .delay(7000)
        .fadeOut(1500, function(){
            $(this).next().length && tellStory_iter($(this).next());
            if($(this).next().length === 0){
                //$storyCard.fadeOut(1500, followUsr_fadeIn);
                followUsr_fadeIn();
            }
        });

}


/*
$(function(){
    $storyCard = $("#storyCard");
    $storyEls = $storyCard.children();
    cardHeight = $storyCard.height();
    $storyCarousel2 = $("#storyCarousel2");

    M.Carousel.init($storyCarousel2,{
        fullWidth: true
    });
    $storyCarousel = M.Carousel.getInstance($storyCarousel2);
    $($storyCarousel.el).height(cardHeight);
    allSlides = $($storyCarousel.el).children();

    $followUsr = $("#followUsr");
    //storyFadeIn();
    setTimeout(function(){storyFadeIn()}, 8000);
});
*/

/*
storyFadeIn();
//tellStory();
setInterval(tellStory, 11000); */
