/*!
    * Start Bootstrap - Creative v6.0.3 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);



  initMagnificPopup($, '#gallery');

})(jQuery); // End of use strict

function initMagnificPopup($, id){

  $(id).magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });
}


//Header animation
var header = document.getElementById('headerText');
var headerHeight = header.offsetHeight;

window.onload = function() {
  header.classList.add('fadeInLeft');
};


//Menu scroll animation
var scrollPosition;
var menu = document.getElementById('menu');

//Reservation scroll animation
var reservation = document.getElementById('reservation');
var reservationHeight = reservation.offsetTop;



window.addEventListener('scroll', function() {
  scrollPosition = window.scrollY;

  if(scrollPosition >= headerHeight / 2 ) {
    menu.classList.add('fadeInUp');
  } 

  if(scrollPosition >= reservationHeight / 1.2) {
    reservation.classList.add('fadeInUp');
  }
  
});





//Lottie Button
var container = document.getElementById('lottieButton');


var animation = bodymovin.loadAnimation({
  animationData: {"v":"5.5.7","meta":{"g":"LottieFiles AE 0.1.20","a":"","k":"","d":"","tc":""},"fr":29.9700012207031,"ip":0,"op":16.0000006516934,"w":200,"h":60,"nm":"Comp 3","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":8,"s":[1.25,29.992,0],"to":[10.833,0,0],"ti":[-10.833,0,0]},{"t":15.0000006109625,"s":[66.25,29.992,0]}],"ix":2},"a":{"a":0,"k":[-98.5,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":2,"s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"t":0,"s":[50,50]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"t":3,"s":[60,60]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"t":8,"s":[50,50]},{"t":15.0000006109625,"s":[180,50]}],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":30,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.937254901961,1,0.552941176471,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-69.75,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1798.00007323404,"st":0,"bm":0}],"markers":[]},
  container: document.getElementById('lottieButton'),
  path: 'data.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "Demo Animation"
});

container.onmouseenter = function() {
  animation.playSegments([0,16], true);
};

container.onmouseleave = function() {
  animation.playSegments([16, 0], true);
};


