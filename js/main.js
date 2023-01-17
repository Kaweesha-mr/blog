$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapce = $('$.toggle-collapce');

    /*click event on toggle menu*/

    $toggleCollapce.click(function(){

        $nav.$togglecClass("collapse");
    })

    //owl-carousel-blog
    $(".owl-carousel").owlCarousel();

});