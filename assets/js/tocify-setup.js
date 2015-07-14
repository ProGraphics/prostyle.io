$(function() {
	var $window = $(window);
	var $tocify  = $('#tocify');
	var $leftCol = $('#leftCol');
	var $nav = $("#navigation");
	var nav_height = $nav.height() + 10;
	var tocify_top = $tocify.offset().top + nav_height - 20;
	var titleShrinkage = 0; /* normally it is 113, about 10% of 1125*/
	
	$tocify.tocify({ 
		selectors:"h2,h3", 
		hashGenerator:"pretty", 
		extendPage:false,
		scrollTo:nav_height,
		smoothScrollSpeed: "slow"
	});
	
	function calcTitleShrinkage() {
		if ($window.width() < 1125) {
			titleShrinkage = 113 - $window.width() / 10;
			if (titleShrinkage < 0) titleShrinkage = 0;
		}
	}
	
	function tocifyPosition() {
		var scroll_top = $window.scrollTop();
		console.log($tocify.offset().top + ' - ' + nav_height + ' - ' + scroll_top + '>=' + tocify_top);
		if (scroll_top >= (tocify_top - titleShrinkage)) {
			$tocify.addClass('fixed');
			$tocify.css('top', nav_height + 'px');
			$tocify.css('left', Math.round($leftCol.offset().left + parseFloat($leftCol.css('padding-left'))) + 'px');
			$tocify.css('width', $leftCol.width() + 'px');
			$tocify.css('max-height', ($window.height() - nav_height - 10) + 'px');
		} else {
			$tocify.removeClass('fixed');
			$tocify.css('top', '');
			$tocify.css('left', '');
			$tocify.css('width', '');
			$tocify.css('max-height', '');
		}
	}
	
	$window.scroll(tocifyPosition);
	$window.resize(function() {
		calcTitleShrinkage();
		tocifyPosition()
	});
	calcTitleShrinkage();
});