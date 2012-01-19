/* Foundation v2.1.4 http://foundation.zurb.com */
$(document).ready(function () {

	/* Use this js doc for all application specific JS */

	/* TABS --------------------------------- */
	/* Remove if you don't need :) */

	function activateTab($tab) {
		var $activeTab = $tab.closest('.tabs').find('a.active'),
			$activeTab2 = $tab.closest('dl').find('a.active'),
				contentLocation = $tab.attr("href") + 'Tab';

		//Make Tab Active
		$activeTab.removeClass('active');
		$activeTab2.removeClass('active');
		$tab.addClass('active');

    	//Show Tab Content
		$(contentLocation).closest('.tabs-content').children('li').hide();
		$(contentLocation).show();
	}

	$('div.tabs').each(function () {
		//Get all tabs
		var tabs = $(this).children('div').children('a');
		tabs.click(function (e) {
			activateTab($(this));
		});
	});
		
	$('dl.tabs').each(function () {
		//Get all tabs
		var tabs = $(this).children('dd').children('a');
		tabs.click(function (e) {
			activateTab($(this));
		});
	});

	if (window.location.hash) {
		activateTab($('a[href="' + window.location.hash + '"]'));
	}

	/* TABS --------------------------------- */
	/* Remove if you don't need :) */

	// function activateTab($tab) {
	// 	var $activeTab = $tab.closest('dl').find('a.active'),
	// 			contentLocation = $tab.attr("href") + 'Tab';
	// 
	// 	//Make Tab Active
	// 	$activeTab.removeClass('active');
	// 	$tab.addClass('active');
	// 
	//     	//Show Tab Content
	// 	$(contentLocation).closest('.tabs-content').children('li').hide();
	// 	$(contentLocation).show();
	// }
	// 
	// $('dl.tabs').each(function () {
	// 	//Get all tabs
	// 	var tabs = $(this).children('dd').children('a');
	// 	tabs.click(function (e) {
	// 		activateTab($(this));
	// 	});
	// });
	// 
	// if (window.location.hash) {
	// 	activateTab($('a[href="' + window.location.hash + '"]'));
	// }


	/* ALERT BOXES ------------ */
	$(".alert-box").delegate("a.close", "click", function(event) {
    event.preventDefault();
	  $(this).closest(".alert-box").fadeOut(function(event){
	    $(this).remove();
	  });
	});


	/* PLACEHOLDER FOR FORMS ------------- */
	/* Remove this and jquery.placeholder.min.js if you don't need :) */

	$('input, textarea').placeholder();



	/* jQuery Orbit ------------- */

	$('#featured').orbit({
	     animation: 'horizontal-push',                  // fade, horizontal-slide, vertical-slide, horizontal-push
	     animationSpeed: 800,                // how fast animtions are
	     timer: true, 			 // true or false to have the timer
	     advanceSpeed: 8000, 		 // if timer is enabled, time between transitions 
	     pauseOnHover: false, 		 // if you hover pauses the slider
	     startClockOnMouseOut: false, 	 // if clock should start on MouseOut
	     startClockOnMouseOutAfter: 1000, 	 // how long after MouseOut should the timer start again
	     directionalNav: false, 		 // manual advancing directional navs
	     captions: true, 			 // do you want captions?
	     captionAnimation: 'fade', 		 // fade, slideOpen, none
	     captionAnimationSpeed: 800, 	 // if so how quickly should they animate in
	     bullets: true,			 // true or false to activate the bullet navigation
	     bulletThumbs: false,		 // thumbnails for the bullets
	     bulletThumbLocation: '',		 // location from this file where thumbs will be
	     afterSlideChange: function(){}, 	 // empty function 
	     fluid: true                         // or set a aspect ratio for content slides (ex: '4x3') 
	});
	
	
	$('#featured-preview').orbit({
	     animation: 'horizontal-push',                  // fade, horizontal-slide, vertical-slide, horizontal-push
	     animationSpeed: 800,                // how fast animtions are
	     timer: true, 			 // true or false to have the timer
	     advanceSpeed: 8000, 		 // if timer is enabled, time between transitions 
	     pauseOnHover: false, 		 // if you hover pauses the slider
	     startClockOnMouseOut: false, 	 // if clock should start on MouseOut
	     startClockOnMouseOutAfter: 1000, 	 // how long after MouseOut should the timer start again
	     directionalNav: false, 		 // manual advancing directional navs
	     captions: true, 			 // do you want captions?
	     captionAnimation: 'fade', 		 // fade, slideOpen, none
	     captionAnimationSpeed: 800, 	 // if so how quickly should they animate in
	     bullets: true,			 // true or false to activate the bullet navigation
	     bulletThumbs: true,		 // thumbnails for the bullets
	     bulletThumbLocation: '../images/recipes/preview/',		 // location from this file where thumbs will be
	     afterSlideChange: function(){}, 	 // empty function 
	     fluid: true                         // or set a aspect ratio for content slides (ex: '4x3') 
	});
	
	
	/* Something about Links??? ------------- */
	$("#aside .thumbs a").click(
	function() {
		var thumbInt = $(this).attr("id").substring(5);
		var newPath = $("#data"+thumbInt).text();
		$("#main img").attr("src", newPath);
	});

	
	
    
    
	/* UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE6/7/8 SUPPORT AND ARE USING .block-grids */
//	$('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'left'});
//	$('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'left'});
//	$('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'left'});
//	$('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'left'});



	/* DROPDOWN NAV ------------- */

	var currentFoundationDropdown = null;
	$('.nav-bar li a, .nav-bar li a:after').each(function() {
		$(this).data('clicks', 0);
	});
	$('.nav-bar li a, .nav-bar li a:after').live('click', function(e) {
		e.preventDefault();
		if (currentFoundationDropdown !== $(this).index() || currentFoundationDropdown === null) {
			$(this).data('clicks', 0);
			currentFoundationDropdown = $(this).index();
		}
		$(this).data('clicks', ($(this).data('clicks') + 1));
		var f = $(this).siblings('.flyout');
		if (!f.is(':visible') && $(this).parent('.has-flyout').length > 1) {
			$('.nav-bar li .flyout').hide();
			f.show();
		} else if (($(this).data('clicks') > 1) || ($(this).parent('.has-flyout').length < 1)) {
			window.location = $(this).attr('href');
		}
	});
	$('.nav-bar').live('click', function(e) {
		e.stopPropagation();
		if ($(e.target).parents().is('.flyout') || $(e.target).is('.flyout')) {
			e.preventDefault();
		}
	});
	// $('body').bind('touchend', function(e) {
	// 	if (!$(e.target).parents().is('.nav-bar') || !$(e.target).is('.nav-bar')) {
	// 		$('.nav-bar li .flyout').is(':visible').hide();
	// 	}
	// });

	/* DISABLED BUTTONS ------------- */
	/* Gives elements with a class of 'disabled' a return: false; */
    

;(function(context) {
    
var dso = {};

dso.follow = function(url, track) {
    track = track || [];
    // undocumented twitter URL count API.
    if (url) track = track.concat([url]);
    // normalize URLs, removing http://
    url = (url || '').replace('http://', '');
    track = _(track).chain()
        .map(function(u) { return u.replace('http://', '') })
        .uniq()
        .value();
    var remaining = track.length;
    var orig = 0;
    var external = 0;
    var graph = $('.follow .graph');
    var tweets = $('.follow .tweets');
    _(track).each(function(u) {
        var renderCount = function(resp) {
            if (u == url && resp.count) orig += resp.count;
            if (u != url && resp.count) external += resp.count;
            remaining--;
            if (remaining) return;
            $('.follow .count').text(orig);
            $('.follow .track').text(external);
            if ((orig + external) >= 100) {
                graph.addClass('maxed');
            } else if (graph.is('.bar')) {
                $('.fives', graph).addClass('fives-' + Math.floor((orig + external) * .2));
                $('.ones', graph).addClass('ones-' + ((orig + external) % 5));
            } else {
                $('.tens', graph).addClass('tens-' + Math.floor((orig + external) * .1));
                $('.ones', graph).addClass('ones-' + ((orig + external) % 10));
            }
        };
        $.ajax({
            url: 'http://urls.api.twitter.com/1/urls/count.json',
            data: { url: u },
            dataType: 'jsonp',
            success: renderCount,
            error: renderCount
        });
    });

    // https://dev.twitter.com/docs/api/1/get/search
    tweets.size() && $.ajax({
        url: 'http://search.twitter.com/search.json',
        data: { q: url, rpp:100 },
        dataType: 'jsonp',
        success: function(resp) {
            if (!resp.results.length) return;
            var template =
                "<a target='_blank' href='http://twitter.com/<%=from_user%>/status/<%=id_str%>' class='tweet'>"
                + "<span class='thumb' style='background-image:url(<%=profile_image_url%>)'></span>"
                + "<span class='popup'>"
                + "<span class='title'>@<%=from_user%></span>"
                + "<small><%=text%></small>"
                + "</span>"
                + "<span class='caret'></span>"
                + "</a>";
            var t = _(resp.results.slice(0,30))
                .map(function(i) { return _(template).template(i); })
                .join('');
            tweets.html(t).addClass('loaded');
        }
    });
};

$(dso.follow);
window.dso = dso;
})(window);


});
