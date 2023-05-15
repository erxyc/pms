$(document).ready(function(){
});

$('.carousel').carousel({
  interval: 3000
});

 $('.playbutton').hide().delay(500).fadeIn(800);

 $('.redbutton').hide().delay(200).fadeIn(500);

 $('#about, #how, #news, #stories, #home').hide().delay(0).fadeIn(200);


$(".playbutton > p, .info, .redcircle > p").hide();


if ( $(window).width() > 769) {  

$('.carousel').on('slid.bs.carousel', function () {
  $(this).find('.playbutton').hide();
    $(this).find('.active .playbutton').fadeIn(300);
});

  $(".playbutton").hover(function(){
      $(".bg").toggleClass("bghover");
      $(".play").toggleClass("playhover", 700);
       $(".playbutton").toggleClass("playbuttonhover", 700);

});

 
$(".playbutton").hover(function(){
    $(".playbutton > p").toggle(0);
  });

  
$(".e1").hover(function(){
    $(".e1 > .redbutton").toggleClass("hidden");

});


$(".a2").hover(function(){
    $(".a2 > .redbutton").toggleClass("hidden");

});

$(".r3").hover(function(){
    $(".r3 > .redbutton").toggleClass("hidden");

});

$(".e1").hover(function(){
    $(".e1 .info").toggle(0);
  });

$(".a2").hover(function(){
    $(".a2 .info").toggle(0);
});


$(".r3").hover(function(){
    $(".r3 .info").toggle(0);
});


  $(".pick1 .redcircle").hover(function(){
    $(".pick1 .redcircle > p").toggle(0);
    $(".pick1 .redcircle > h3").toggle(0);
});

  $(".select2 .redcircle").hover(function(){
    $(".select2 .redcircle > p").toggle(0);
    $(".select2 .redcircle > h3").toggle(0);
});

    $(".try3 .redcircle").hover(function(){
    $(".try3 .redcircle > p").toggle(0);
     $(".try3 .redcircle > h3").toggle(0);
});


}  else {

}




$("#carouselExampleIndicators").click(function(){
	$(".carousel-caption").hide().delay(100).show(0);
	$(".playbutton").hide().delay(500).show(0);
});


//videos

$('#oga').on('shown.bs.modal', function () {
  $('#ogaVideo')[0].play();
})

$('#emotional').on('shown.bs.modal', function () {
  $('#moodVideo1')[0].play();
})

$('#annoyed').on('shown.bs.modal', function () {
  $('#moodVideo2')[0].play();
})

$('#miserable').on('shown.bs.modal', function () {
  $('#moodVideo3')[0].play();
})

$('#oga').on('hidden.bs.modal', function () {
  $('#ogaVideo')[0].pause();
})

$('#emotional').on('hidden.bs.modal', function () {
  $('#moodVideo1')[0].pause();
})

$('#annoyed').on('hidden.bs.modal', function () {
  $('#moodVideo2')[0].pause();
})

$('#miserable').on('hidden.bs.modal', function () {
  $('#moodVideo3')[0].pause();
})


//how it works

$(".mock2, .mock3").hide();

$(".pick1").click(function(){
  $(".mock2, .mock3").hide(0);
  $(".mock1").show(0);
});

$(".select2").click(function(){
  $(".mock1, .mock3").hide(0);
  $(".mock2").show(0);
});

$(".try3").click(function(){
  $(".mock1, .mock2").hide(0);
  $(".mock3").show(0);
});

