$(document).ready(function(){
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');    
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
});

var sectionArray = [1, 2, 3, 4, 5, 6];
var lastActiveIndex = 0; // Добавляем переменную для отслеживания последнего активного элемента меню

$.each(sectionArray, function(index, value){
     $(document).scroll(function(){
         var offsetSection = $('#' + 'section_' + value).offset().top - 86;
         var docScroll = $(document).scrollTop();
         var docScroll1 = docScroll + 1;
         
         if ( docScroll1 >= offsetSection ){
             lastActiveIndex = index; // Обновляем индекс последнего активного элемента
         }
     });

    $('.click-scroll').eq(index).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top - 86;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop': offsetClick
        }, 300, function() {
            // После завершения анимации прокрутки, обновляем активный элемент меню
            $('.navbar-nav .nav-item .nav-link').removeClass('active');
            $('.navbar-nav .nav-item .nav-link').addClass('inactive');  
            $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
            $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
            lastActiveIndex = index;
        });
    });
});

// После всех итераций, устанавливаем последний активный элемент снова
$(document).scroll(function(){
    $('.navbar-nav .nav-item .nav-link').removeClass('active');
    $('.navbar-nav .nav-item .nav-link').addClass('inactive');  
    $('.navbar-nav .nav-item .nav-link').eq(lastActiveIndex).addClass('active');
    $('.navbar-nav .nav-item .nav-link').eq(lastActiveIndex).removeClass('inactive');
});
