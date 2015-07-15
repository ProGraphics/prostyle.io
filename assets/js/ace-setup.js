$(function() {

    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/clouds");
    editor.getSession().setMode("ace/mode/javascript");
		editor.setOptions({
				maxLines: 10000
		});
		
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
			Pro.Motion.reload();
			$btnUpdateAnim.attr("disabled","disabled");
		};
		
		var throttledUpdate = throttle(function() {	update(); }, 10000);
		
		var session = editor.getSession().on('change', function() {
			$btnUpdateAnim.removeAttr("disabled");
			throttledUpdate();
		});
		
		$btnUpdateAnim.click(update);
});