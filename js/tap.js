var $tabs = $("#pages > li");
var $tabContent = $(".tab-content");

$tabs.on("click", function () {
    if ($(this).is(".on")) return; 

    $tabs.filter(".on").removeClass("on");
    $tabContent.filter(".on").removeClass("on");

    $(this).addClass("on");

    var targetSelector = $(this).attr("data-target");

    $(targetSelector).addClass("on"); 
});