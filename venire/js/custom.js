$(document).ready(function(){"use strict";$(window).scroll(function(){if($(this).scrollTop()>500){$('#back-to-top').fadeIn();}else{$('#back-to-top').fadeOut();}});$('#back-to-top').click(function(){$('#back-to-top').tooltip('hide');$('body,html').animate({scrollTop:0},800);return false;});});$(window).on('load',function(){var preloader=$('#preloader div');preloader.fadeOut();$('#preloader').delay(350).fadeOut('slow');$('body').delay(350).css({'overflow':'visible'});});