'use strict';

$(".question-wrapper").click( function () {
  var container = $(this).parents(".accordion");
  var answer = container.find(".answer-wrapper");
  var trigger = container.find(".material-icons.drop");
	var state = container.find(".question");
  
  answer.animate({height: "toggle"}, 100);
  
  if (trigger.hasClass("icon-expend")) {
    trigger.removeClass("icon-expend");
		state.removeClass("active");
  }
  else {
    trigger.addClass("icon-expend");
		state.addClass("active");
  }
  
  if (container.hasClass("expanded")) {
    container.removeClass("expanded");
  }
  else {
    container.addClass("expanded");
  }

  if (container.hasClass("expanded")) {
    container.removeClass('border');
  } else {
    container.addClass('border');
  }
});

const button = document.getElementById('burger-menu');
const menu = document.getElementById('menu');
const closedMenu = document.getElementById('close_menu');
const body = document.getElementById('body');
const button_top = $('#button');
const header = document.getElementById('header');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    button_top.addClass('show');
    header.classList.add('header__background');
  } else {
    button_top.removeClass('show');
    header.classList.remove('header__background');
  }
});

button.addEventListener('click', () => {
  menu.classList.add('burger-menu--open');
  menu.classList.remove('burger-menu--closed');
  body.classList.add('open');
  button_top.removeClass('show');
});

closedMenu.addEventListener('click', () => {
  menu.classList.remove('burger-menu--open');
  body.classList.remove('open');
  menu.classList.add('burger-menu--closed');
});

button_top.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
