$(function() {
	var $window = $(window);
	var $tocify  = $('#tocify');
	var $leftCol = $('#leftCol');
	var $nav = $("#navigation");
	var $footer = $("#footer-content");
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
		if (scroll_top >= (tocify_top - titleShrinkage)) {
			var window_height = $window.height() - nav_height - 10;
			var doc_height = $(document).height() - nav_height - 10;
			var footer_height = $footer.height();
			var maxHeight = Math.max(0, Math.min(window_height, doc_height - scroll_top - footer_height));
			
			$tocify.addClass('fixed');
			$tocify.css('top', nav_height + 'px');
			$tocify.css('left', Math.round($leftCol.offset().left + parseFloat($leftCol.css('padding-left'))) + 'px');
			$tocify.css('width', $leftCol.width() + 'px');
			$tocify.css('max-height', maxHeight + 'px');
			$tocify.css('display', maxHeight > 0 ? 'block' : 'none');
		} else {
			$tocify.removeClass('fixed');
			$tocify.css('top', '');
			$tocify.css('left', '');
			$tocify.css('width', '');
			$tocify.css('max-height', '');
			$tocify.css('display', 'block');
		}
	}
	
	var throttleTimer = null;
	function throttle(fn, delay) {
		var context = this, args = arguments;
		return function() {
			clearTimeout(throttleTimer);
			throttleTimer = setTimeout(function () {
				fn.apply(context, args);
			}, delay);
		}
	}
	var scrollToActive = function() {
		var $active = $tocify.find("li.tocify-item.active");
		if ($active.length > 0) {
			if($active.parent().hasClass("tocify-subheader")) {
				/* since it is an H3 header, set active to the parent so the whole group is scrolled to */
				$active = $active.parent().parent();
			}
			var tocTop = $tocify.offset().top;
			var tocHeight = $tocify.height() + 8;
			var activeTop = $active.offset().top - 2;
			var activeHeight = $active.height();
			var oldScrollTop = $tocify.scrollTop();
			var newScrollTop = activeTop + oldScrollTop - tocTop;
			if (activeTop - tocTop < 0) {  /* item is above the scroll port */
				$tocify.animate({ scrollTop: newScrollTop }, 300);
			}
			else if (activeTop - tocTop > tocHeight - activeHeight) {  /* item is above the scroll port */
				$tocify.animate({ scrollTop: newScrollTop + activeHeight - tocHeight}, 300);
			}
		}
	};
	var throttledToActive = throttle(scrollToActive, 1000);
		
	$window.on("scroll.tocify", function(event) {
		throttledToActive();
	});
	
	$window.scroll(tocifyPosition);
	$window.resize(function() {
		calcTitleShrinkage();
		tocifyPosition();
		throttledToActive();
	});
	calcTitleShrinkage();
	
	$("a[data-toc]").click(function(e,f){
		$('li.tocify-item[data-unique="' + e.target.dataset.toc + '"]').click();
		e.preventDefault();
	});
});