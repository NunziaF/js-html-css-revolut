// Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript/jQuery
// faccio funzionare l’hamburger menù;
// primo click, appare il menù;
// se cliccko che è già visibile, invece scompare.

$('.fa-bars').click(
  function(){
    $('.hamburger-menu').show();
  }
);

$('.close').click(function(){
    $('.hamburger-menu').hide();
  }
);


//Menu a cascata
$('.style').hide();

$('.header-right ul li a').click(function(){
  $(this).next().toggle();
});


//Menu a cascata hamburger

$('.style_hum').hide();

$('.hamburger-menu ul li a').click(function(){
  $(this).next().slideToggle();
});
