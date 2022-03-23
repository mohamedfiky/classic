/* global $, alert, console */

$(function () {

    "use strict" ;

    $(".header").height($(window).height());

    $(window).resize(function(){

        $(".header").height($(window).height());


        $(".bxslider").each(function(){
            $(this).css("paddingTop",($(window).height() - $(".bxslider li").height())/2);
        });


    });

    $(".list li a").click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
    });


    $(".bxslider").each(function(){
        $(this).css("paddingTop",($(window).height() - $(".bxslider li").height())/2);
    });

    $(".bxslider").bxSlider({
        pager:false

    });


    $(".list li a").click(function(){
        $("html , body").animate({
            scrollTop: $("#" + $(this).data("value") ).offset().top
        }, 1000);
    });
    

    /**************************************   Slider   ********************************************/


    (function autoSlider() {

        $(".slider .active").each(function (){

            if (!$(this).is(":last-child"))
            {
                $(this).delay(5000).fadeOut(1000, function (){

                    $(this).removeClass("active").next().addClass("active").fadeIn();

                    autoSlider();

                });
            
            } else {

                $(this).delay(5000).fadeOut(1000, function (){

                    $(this).removeClass("active");

                $(".slider div").eq(0).addClass("active").fadeIn();

                autoSlider();

                });

               }
            
            

        });

    }());
    

   //////////////////////////////////////////////////////////////////////////////////////////////

   $(".projects ul li").on("click", function(){

        $(this).addClass("selected").siblings().removeClass("selected");

        console.log($(this).data("class"))  ;

        if($(this).data("class") === "all"){
            $(".galary .shuf").css("opacity","1");
        }else{
            $(".galary .shuf").css("opacity","0.05");
            $($(this).data("class")).parent().css("opacity","1");

        }

   });

    /**************************************  End Slider   ********************************************/



    
    /**************************************  Nice Scroll   ********************************************/



    $("html").niceScroll({

        cursorcolor:"#1abc9c",
        cursorwidth:"8px",
        scrollspeed: 100,
        cursorborderradius: "2px"

    });


});