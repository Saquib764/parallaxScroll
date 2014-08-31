parallaxScroll
==============
JavaScript plugin for creating parallax effect in your page.

Dependencies
============
jQuery

How to use
==========
Include 'parallaxScroll.jQuery.js' in tour webpage.
To apply parallax scrolling in your element (say '.scroll') write following code in script.

$('.scroll').parallaxScroll({
      'image' : 'images/img0.jpg',
      'speed' : 0.5,
      parallax : true,
      xOffset: 0,
      yOffset: 0
  });
  
Except 'image' all other parameters are optional. To set image path through HTML use data attribute to pass image path - data-image = "images/img0.jpg".

