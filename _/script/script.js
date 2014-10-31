// fit embedded videos
$("body").fitVids(); 

// responsive headers
$("#hero #title").fitText(1);
$("#sub-title").fitText(1.5);
// $(".fitHeading").fitText();
// $(".fitHeading3").fitText(1.1, { minFontSize: '50px', maxFontSize: '75px' });

// body height
$(function() {
    $(window).resize(function() {
        $('body:last').height($(window).height() - $('body:last').offset().top);
    });
    $(window).resize();
});

// instag feed
/*var feed = new Instafeed({
    get: 'tagged',
    tagName: 'startuppingpong',
    clientId: 'b9eea1a951e24c54bbfd46e8360119f1',
    resolution: 'standard_resolution',
    sortBy: 'most-recent',
    limit: '40'
});
feed.run();*/

// facebook embed
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&appId=504797676310031&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// smooth scroll
smoothScroll.init({
  speed: 1000,
  easing: 'easeInOutCubic',
  offset: 0,
  updateURL: true,
  callbackBefore: function ( toggle, anchor ) {},
  callbackAfter: function ( toggle, anchor ) {}
});

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