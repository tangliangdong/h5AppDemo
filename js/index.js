// $(function(){
//   $("#fullpage").fullpage();
// });
//或添加内容。
$(function() {
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
        'navigation': true,
        'navigationPosition': 'right',
        'navigationColor' : '#fff',
        'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],
        afterLoad: function(anchorLink, index) {
            switch (index) {
                case 1:
                    setTimeout(function() {
                        secondPageRemoveClass();
                    }, 500);
                    init();
                    break;
                case 2:
                    setTimeout(function() {
                        onePageRemoveClass();
                        thirdPageRemoveClass();
                    }, 500);

                    $('#page2-box').children('.img1').addClass('animated slideInDown');
                    setTimeout(function() {
                        $('#page2-box').children('.img2').addClass('animated slideInDown');
                    }, 100);
                    setTimeout(function() {
                        $('#finger').addClass('finger-animate');
                    }, 1000);

                    $('#page2-describe').children('p').eq(0).addClass('animated rotateInUpRight');
                    setTimeout(function() {
                        $('#page2-describe').children('p').eq(1).addClass('animated rotateInUpRight');
                    }, 100);
                    break;
                case 3:
                    setTimeout(function() {
                        secondPageRemoveClass();
                        forthPageRemoveClass();
                    }, 500);
                    $('#page3-box').children('.img1').addClass('animated bounceInDown');
                    setTimeout(function() {
                        $('#page3-box').children('.img2').addClass('animated bounceInDown');
                    }, 100);
                    setTimeout(function() {
                        $('#page3-finger').addClass('finger-animate');
                    }, 1000);

                    $('#page3-describe').children('p').eq(0).addClass('animated flipInX');
                    setTimeout(function() {
                        $('#page3-describe').children('p').eq(1).addClass('animated flipInX');
                    }, 100);

                    break;
                case 4:
                    setTimeout(function() {
                        fifthPageRemoveClass();
                        thirdPageRemoveClass();
                    }, 500);
                    $('#page4-box').children('.card').addClass('obliqueTopAndRight');

                    setTimeout(function(){
                      $('#page4-box').children('.card').children('.img3').addClass('toTheRight');
                      setTimeout(function(){
                        $('#page4-box').children('.card').children('.img2').addClass('toTheLeft');
                        setTimeout(function(){
                          $('#page4-describe').children('p').addClass('obliqueBottomAndLeft');
                          setTimeout(function(){
                            setTimeout(function(){
                              $('#page4-describe').children('.finger-upward').addClass('fingerB');
                            },1400);
                          },1000);
                        },600);
                      },1200);
                    },1000);


                    break;
                    case 5:
                    setTimeout(function() {
                        forthPageRemoveClass();
                        sixthPageRemoveClass();
                    }, 500);
                      break;
            }
        }
    });
    init();
});

function onePageRemoveClass() {
    var $welcomePage = $('#welcome-page');
    $welcomePage.children('img').css('opacity', 0);
    $welcomePage.children('h2').removeClass('animated slideInDown');
    $welcomePage.children('p').removeClass('animated slideInDown');
    $welcomePage.children('img').removeClass('animated bounceInLeft');
}

function init() {
    var $welcomePage = $('#welcome-page');

    $welcomePage.children('h2').addClass('animated slideInDown');
    $welcomePage.children('p').addClass('animated slideInDown');
    $welcomePage.children('img').addClass('animated bounceInLeft');
    $('#welcome-page').children('img').css('opacity', 1);
}

function secondPageRemoveClass() {
    $('#finger').removeClass('finger-animate');
    $('#page2-box').children('.img2').removeClass('animated slideInDown');
    $('#page2-box').children('.img1').removeClass('animated slideInDown');
    $('#finger').removeClass('finger-animate');
    $('#page2-describe').children('p').removeClass('animated rotateInUpRight');
}

function thirdPageRemoveClass() {
    $('#page3-finger').removeClass('finger-animate');
    $('#page3-box').children('.img2').removeClass('animated bounceInDown');
    $('#page3-box').children('.img1').removeClass('animated bounceInDown');
    $('#finger').removeClass('finger-animate');
    $('#page3-describe').children('p').removeClass('animated flipInX');
}

function forthPageRemoveClass() {
  $('#page4-box').children('.card').removeClass('obliqueTopAndRight');
  $('#page4-describe').children('p').removeClass('obliqueBottomAndLeft');
  $('#page4-describe').children('.finger-upward').removeClass('fingerB');
  $('#page4-box').children('.card').children('.img2').removeClass('toTheLeft');
  $('#page4-box').children('.card').children('.img3').removeClass('toTheRight');
}

function fifthPageRemoveClass() {

}
function sixthPageRemoveClass(){

}
