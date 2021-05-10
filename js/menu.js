$(document).ready(function(){   
    //scroll menu
    $(window).on('scroll', ()=>{
        let top = $(window).scrollTop();
        if(top>100) {
            //$('header').css({'position': 'fixed', 'z-index':'999'})
            $('header').addClass('moveHeader')
            $('.logo').addClass('leftItemMenu')
            $('#containerMenu').addClass('rightItemMenu')
            $('nav').addClass('nav__widthFixed')
        } else {
            //$('header').css('position', 'relative')
            $('header').removeClass('moveHeader')
            $('.logo').removeClass('leftItemMenu')
            $('#containerMenu').removeClass('rightItemMenu')
            $('nav').removeClass('nav__widthFixed')
        }
    })
    //hide/show of menu
    $('.buttomMenu').on('click',()=>{
        $('.menu').toggle();
    })
}) 
