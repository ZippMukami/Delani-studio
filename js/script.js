$(document).ready(function () {

    $(".item-wrap").hover(function () {
        $(this).find(".image-title").fadeIn(300);
    }, function () {
        $(this).find(".image-title").fadeOut(100);
    });

    const icon_wrap = $(".icons").find('p');
    const icon1 = $(".icon1").find("p");
    const icon2 = $(".icon2").find("p");
    const icon3 = $(".icon3").find("p");




    icon_wrap.hide();

    $(".icon1").click(
        function () {
            if (icon1.is(":visible")) {
                icon1.hide();
            }else {
                    icon1.show();
                }
            }
        
    )


    $(".icon2").click(
        function () {
            if (icon2.is(":visible")) {
                icon2.hide();
            }
            else {
                icon2.show();
            }
        }
    )



$(".icon3").click(
    function () {
        if (icon3.is(":visible")) {
            icon3.hide();
         } else {
                icon3.show();
            }
        }
    
)
















});