$(document).ready(function(){
    //專長
    $('.exper').hover(function(){
        $('.exper_content_long').show(500,0);
    });
    //經歷
    $('.experience_img.A').mouseenter(function(){
        $('.experience_item_Test.textA').addClass('blue');
    });
    $('.experience_img.A').mouseleave(function(){
        $('.experience_item_Test.textA').removeClass('blue');
    });

    $('.experience_img.B').mouseenter(function(){
        $('.experience_item_Test.textB').addClass('blue');
    });
    $('.experience_img.B').mouseleave(function(){
        $('.experience_item_Test.textB').removeClass('blue');
    });

    $('.experience_img.C').mouseenter(function(){
        $('.experience_item_Test.textC').addClass('blue');
    });
    $('.experience_img.C').mouseleave(function(){
        $('.experience_item_Test.textC').removeClass('blue');
    });

    $('.experience_img.D').mouseenter(function(){
        $('.experience_item_Test.textD').addClass('blue');
    });
    $('.experience_img.D').mouseleave(function(){
        $('.experience_item_Test.textD').removeClass('blue');
    });
});

