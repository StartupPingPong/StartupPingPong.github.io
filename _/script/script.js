// Fit the embedded videos
$("body").fitVids(); 

// Fitted headers
$("#hero #title").fitText(1);
$("#sub-title").fitText(1.5);
// $(".fitHeading").fitText();
// $(".fitHeading3").fitText(1.1, { minFontSize: '50px', maxFontSize: '75px' });

//
$(function() {
    $(window).resize(function() {
        $('body:last').height($(window).height() - $('body:last').offset().top);
    });
    $(window).resize();
});

// instag feed
var feed = new Instafeed({
    get: 'tagged',
    tagName: 'startuppingpong',
    clientId: 'b9eea1a951e24c54bbfd46e8360119f1',
    resolution: 'standard_resolution',
    sortBy: 'most-recent',
    limit: '60'
});
feed.run();

// fb embed
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&appId=504797676310031&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// Smooth scroll
smoothScroll.init({
  speed: 1000,
  easing: 'easeInOutCubic',
  offset: 0,
  updateURL: true,
  callbackBefore: function ( toggle, anchor ) {},
  callbackAfter: function ( toggle, anchor ) {}
});