// fit embedded videos
//$("body").fitVids(); 

// smooth scroll
/*smoothScroll.init({
  speed: 1000,
  easing: 'easeInOutCubic',
  offset: 0,
  updateURL: true,
  callbackBefore: function ( toggle, anchor ) {},
  callbackAfter: function ( toggle, anchor ) {}
});*/

// background slider 
$(function() {
  cbpBGSlideshow.init();
});

// tracking
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-48763619-1', 'auto');
ga('send', 'pageview');