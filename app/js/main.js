$(function(){   

////slider
  $('.traders__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
         
        }
      },    
     
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,          
        }
      },
    ]
  });

  // sticky-header
  $(".head-navbar").removeClass("default");
  $(window).scroll(function(){
    if ($(this).scrollTop() > 20) {
      $(".head-navbar").addClass("default").fadeIn('fast');
    } else {
      $(".head-navbar").removeClass("default").fadeIn('fast');
    };
  });    
 

  ///якорные ссылки///////////
  $("#menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
    
});

  /* toTop */
  $(window).scroll(function () {
      
    if ($(this).scrollTop() != 0)
       $('#toTop').fadeIn("slow");
    else
       $('#toTop').fadeOut("slow");
 });
 $('#toTop').click(function () {
    $('body,html').animate({
       scrollTop: 0
    }, 800);
 });


  $('.menu__btn').on("click", function(){
    $(this).toggleClass('open');
    $('.menu__list').slideToggle();
  });
  
  $('.header__btn-menu').on('click', function () {
    $('.header__box').toggleClass('active');
  });

  

});