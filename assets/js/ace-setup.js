$(function() {

    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/clouds");
    editor.getSession().setMode("ace/mode/javascript");
		editor.setOptions({
				maxLines: 10000
		});
		editor.focus();
		
		var $btnUpdateAnim = $("#btnUpdateAnim");
		
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
		
		var update = function() {
			clearTimeout(throttleTimer);
			$btnUpdateAnim.attr("disabled","disabled");
			try {
				var value = editor.getValue().trim();
				if (value.indexOf("story = {") !== 0 || value.slice(value.length-2) !== "};") {
					showError("<i>Invalid format. It should be:</i><br><br>story = { ... };");
				}
				else {
					$("#animation").removeClass("anim-error");
					value = value.slice(8, value.length - 1);
					Pro.Motion.Stories.animation.story = JSON5.parse(value);
					Pro.Motion.reload();
				}
			}
			catch(err) {
				showError("<i>Error:</i><br><br>" + err.message);
			}
		};
		
		var showError = function(msg) {
			var $animation = $("#animation");
			$animation.html(msg);
			$animation.removeAttr("style");
			$animation.removeAttr("class");
			$animation.addClass("anim-error");
		}
		
		var throttledUpdate = throttle(function() {	update(); }, 10000);
		
		var session = editor.getSession().on('change', function() {
			$btnUpdateAnim.removeAttr("disabled");
			throttledUpdate();
		});
		
		$btnUpdateAnim.click(function() {
			editor.focus();
			update();
		});
});