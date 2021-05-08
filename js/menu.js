$(document).ready(function(){   
    $('header').css({'z-index':'999','position':'relative'})
    //scroll menu
    $(window).on('scroll', ()=>{
        let top = $(window).scrollTop();
        if(top>100) $('header').css({'position': 'fixed', 'z-index':'999'})
        else $('header').css('position', 'relative')
    })
    //hide/show of menu
    $('.buttomMenu').on('click',()=>{
        $('.menu').toggle();
    })
}) 
