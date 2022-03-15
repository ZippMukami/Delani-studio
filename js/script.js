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
            } else {
                icon1.show();
            }
        }

    )


    $(".icon2").click(
        function () {
            if (icon2.is(":visible")) {
                icon2.hide();
            } else {
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

    // let email = $(".required email").value;
    // let name = $("#mce-NAME").value;
    // let message = $("#mce-MESSAGE").value;
    // let form = $(".form ");
    // let submitInput = $(".button");
    // let userOutput = $(".responseOutput");



    // form.submit(function (e){
    //         e.preventDefault();

    //         if (email == "") {
    //             alert("email is required");
    //             return false;
    //         };

    //         if (name == "") {
    //             alert("Name is required");
    //             return false;
    //         };

    //         if (message == "") {
    //             alert("Input your message");
    //             return false;
    //         };
    //     });




    //     (function ($) {
    //         window.fnames = new Array();
    //         window.ftypes = new Array();
    //         fnames[0] = 'EMAIL';
    //         ftypes[0] = 'email';
    //         fnames[1] = 'NAME';
    //         ftypes[1] = 'text';
    //         fnames[2] = 'MESSAGE';
    //         ftypes[2] = 'text';
    //     }(jQuery));
    //     var $mcj = jQuery.noConflict(true);


        // userOutput.innerHTML = name + ", we have received your message. Thankyou for reaching out to us."

    















});