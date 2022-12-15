// 인디케이터 a클릭 시 해당되는 장소로 부드럽게 이동
var $page = $(".page");
var $indicator = $("#page_indicator");
var indicator_height = $indicator.outerHeight(true);

$(window).on('scroll', function () {
    var scroll = $(this).scrollTop();
    
    $page.each(function() {
        var top = $(this).offset().top - indicator_height,
        // var top = $(this).offset().top,
            bottom = top + $(this).outerHeight(true);
        
        if (scroll >= top && scroll <= bottom) {
            $indicator.find('a').removeClass('active');
            $page.removeClass('active');
            
            $(this).addClass('active');
            $indicator.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
    }); //each
}); //scroll

$indicator.find('a').on('click', function () {
    var $el = $(this);
    var id = $el.attr('href');
    
    $('html, body').animate({
        // scrollTop: $(id).offset().top - indicator_height
        scrollTop: $(id).offset().top
    }, 500);
    
    return false;
});


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// 인디케이터 툴팁
$("#page_indicator > li > a").hover(function () {
    $(this).children().show(300);
}, function () {
    $(".tooltip").hide();
});
