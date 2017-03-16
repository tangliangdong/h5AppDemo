// $(function(){
//   $("#fullpage").fullpage();
// });
//或添加内容。
$(function() {
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        'navigationTooltips': ['BiuBiu组队', '活动页面', '好友页面', '发布页面', '活动详情页面'],
        scrollingSpee: 1000,
        afterLoad: function(anchorLink, index) {
            switch (index) {
                case 1:
                    secondPageRemoveClass();

                    init();
                    break;
                case 2:
                    setTimeout(function() {
                        onePageRemoveClass();
                        thirdPageRemoveClass();
                    }, 500);

                    $('.page2>.left>.label').addClass('wordTensile');
                    $('.page2>.left>.thinkSomething').css('transform', 'scale(1)');
                    setTimeout(function() {
                        $('.page2>.left>.thinkSomething>img').css('opacity', 1);

                        setTimeout(function() {
                            $('.page2>.left>.travel>h2').css({
                                'transform': 'translateX(0)',
                                'opacity': 1
                            });

                            $('.page2>.right>.img1').addClass('imgTransform');
                            setTimeout(function() {
                                $('.page2>.right>.img2').addClass('imgTransform');
                                setTimeout(function() {
                                    $('.page2>.right>.img3').addClass('imgTransform');
                                }, 1000);
                            }, 1000);

                            setTimeout(function() {
                                $('.page2>.left>.travel>span').css('width', '90%');
                            }, 500);
                        }, 500);
                    }, 1000);


                    break;
                case 3:
                    secondPageRemoveClass();
                    setTimeout(function() {
                        forthPageRemoveClass();
                    }, 500);


                    break;
                case 4:
                    setTimeout(function() {
                        fifthPageRemoveClass();
                        thirdPageRemoveClass();
                    }, 500);



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

    var audio = $('#bgMusic');
    $('#music-play').css('display', 'block');
    var tab = true;
    $('#music-play').click(function(event) {
      if(tab){
        audio.get(0).play();
        tab = false;
      }else{
        audio.get(0).pause();
        tab = true;
      }
    });

});

function init() {
    $('.page1>.title').addClass('animated fadeInDown');
    setTimeout(function() {
        $('.page1>.vertical').addClass('animated verticalSpread');
        $('.page1>.horizontal').addClass('animated horizontalSpread');
        setTimeout(function() {
            $('.page1>.img1').addClass('animated imgRotate');
            $('.page1>.img2').addClass('animated imgRotate');
            setTimeout(function() {
                $('.page1>.signature').addClass('animated fadeInDown');
            }, 1000);
        }, 500);
    }, 500);
}

function onePageRemoveClass() {
    $('.page1>.title').removeClass('animated fadeInDown');
    $('.page1>.vertical').removeClass('animated verticalSpread');
    $('.page1>.horizontal').removeClass('animated horizontalSpread');
    $('.page1>.img1').removeClass('animated imgRotate');
    $('.page1>.img2').removeClass('animated imgRotate');
    $('.page1>.signature').removeClass('animated fadeInDown');
}


function secondPageRemoveClass() {
    $('.page2>.left>.label').removeClass('wordTensile');
    $('.page2>.left>.thinkSomething').css('transform', 'scale(0)');
    $('.page2>.left>.thinkSomething>img').css('opacity', 0);

    $('.page2>.left>.travel>h2').css({
        'transform': 'translateX(-100%)',
        'opacity': 0
    });
    $('.page2>.right>img').removeClass('imgTransform');
    $('.page2>.left>.travel>span').css('width', '0px');
}


function thirdPageRemoveClass() {

}

function forthPageRemoveClass() {

}

function fifthPageRemoveClass() {


}
