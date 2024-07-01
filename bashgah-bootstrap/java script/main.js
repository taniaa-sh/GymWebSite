$(document).ready(function(){
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change')
    })
})
$(window).scroll(function(){
    let position =$(this).scrollTop();
    if(position >= 200){
        $('.nav-menu').addClass('custom-navbar')
    }else{
        $('.nav-menu').removeClass('custom-navbar')
    }
})
$(window).scroll(function(){
    let position =$(this).scrollTop();
    if(position >= 700){
        $('.award-text').addClass('fromRight')
        $('.award-img').addClass('fromleft')
    }else{
        $('.award-text').removeClass('fromRight')
        $('.award-img').removeClass('fromleft')
    }
})
$('.gallery-list-item').click(function(){
    let value =$(this).attr('data-filter');
    $(this).addClass('active-item').siblings().removeClass('active-item')
    if(value==='all'){
        $('.filter').show(300)
    }else{
        $('.filter').not('.' +value).hide(500);
        $('.filter').filter('.' +value).show(300);
    }
})
$(window).scroll(function(){
    let position =$(this).scrollTop();
    if(position >= 5200){
        $('.card1').addClass('moveFromRight')
        $('.card2').addClass('moveFromButtom')
        $('.card3').addClass('moveFromLeft')
    }else{
        $('.card1').removeClass('moveFromRight')
        $('.card2').removeClass('moveFromButtom')
        $('.card3').removeClass('moveFromLeft')
    }
})