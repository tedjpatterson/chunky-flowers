// Adds and removes body class depending on screen width.
function screenClass() {
    if($(window).innerWidth() > 960) {
        $('header').addClass('fixed-bottom').removeClass('fixed-top');
    } else {
        $('header').addClass('fixed-top').removeClass('tixed-bottom');
    }
}

// Fire.
screenClass();

// And recheck when window gets resized.
$(window).bind('resize',function(){
    screenClass();
});