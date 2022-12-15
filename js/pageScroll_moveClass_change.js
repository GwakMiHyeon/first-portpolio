var $page = $(".page");
var $indicator = $("#page_indicator");
var indicatorA = $("#page_indicator > li > a");

for(var i = 0; i < $page.length; i++)
var indicatorLength = indicatorA.length;
var pageLength = $page.length;
indicatorLength = pageLength;

$page[i].on("scroll")
$indicator.on("click", function() { //indicator > li > a를 클릭했을 때

    if($(this).is(".move")) { //move클래스가 있는 경우
        not($(this)).$indicator.find("move").removeClass("move");
        // return;
    } else { //move클래스가 없는 경우
        $indicator.removeClass("move");
        $(this).addClass("move");
    }
        
}); //click
    
// window.onload = function(){
//     for(var i = 0; i < document.getElementsByClassName('move').length; i++){
//         document.getElementsByClassName('move')[i].innerText = 'haro ^-^*';
//     }
// }