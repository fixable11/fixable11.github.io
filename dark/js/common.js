// ---------------Caorusel---------------
var slideNow = 1;
var slideCount = $('#slidewrapper').children().length/5;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });

    
// ---------------MENU_TOGGLE---------------
$('.bar').on('click',function(){
  $('.menu').slideToggle(300, function(){
    if($(this).css('display') === 'none') {
      $(this).removeAttr('style');
    };
  });
});


    });

// function nextSlide() {
//     if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
//         $('#slidewrapper').css('transform', 'translate(0, 0)');
//         slideNow = 1;
//     } else {
//         translateWidth = -$('#viewport').width() * (slideNow);
//         $('#slidewrapper').css({
//             'transform': 'translate(' + translateWidth + 'px, 0)',
//             '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//             '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//         });
//         slideNow++;
//     }
// }


function nextSlide() {
   if ($('#slidewrapper').is(':animated')) { return false; }
    if (slideNow >= slideCount) {
      $('#slidewrapper').css({
            'left': '0'
        });
        
        translateWidth = -$('#viewport').width();
        $('#slidewrapper').animate({
            'left':translateWidth + 'px'
        },800);

        
        slideNow = 2;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').animate({
            'left': translateWidth + 'px'
        },800);
        slideNow++;

    }
}

function prevSlide() {
    if ($('#slidewrapper').is(':animated')) { return false; }
    if (slideNow == 2 ) {
        $('#slidewrapper').animate({
            'left':'0'
        },800);
        slideNow = 1;
    } else if(slideNow == 1) {
      translateWidth = -$('#viewport').width() * (slideCount-1);
        $('#slidewrapper').css({
            'left': translateWidth + 'px'
        });
      translateWidth = -$('#viewport').width() * (slideCount-2);
        $('#slidewrapper').animate({
            'left':translateWidth+ 'px'
        },800);
        slideNow = slideCount-1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').animate({
            'left': translateWidth + 'px'
        },800);
        slideNow--;
    }
}





