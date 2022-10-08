$(function () {
    // 페이지 스크롤
    // 기본 이벤트 제거
    window.addEventListener("wheel", function (event) {
        event.preventDefault();
    }, { passive: false });
    
    // ----------------------------------------------------------
    var $window = $(window);
    var $html = $("html, body");
    
    var pageIndex = 0;
    var lastPageIndex = $(".page").length - 1;
    
    $html.animate({"scrollTop": 0}, 10);

    window.addEventListener("wheel", function (event) {
        if ($html.is(":animated")) return;

        if (event.deltaY > 0) {
            if (pageIndex >= lastPageIndex) return;
                pageIndex++;
        } else if (event.deltaY < 0) {
            if (pageIndex <= 0) return;
                pageIndex--;
        }

        var posTop = $window.height() * pageIndex;
       
        $html.animate({scrollTop: posTop});
    
    }); //window.onwheel
}); // document.onready