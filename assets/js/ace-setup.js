$(function() {

    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/clouds");
    editor.getSession().setMode("ace/mode/javascript");
		editor.setOptions({
				maxLines: 10000
		});
		
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
		
		var update = throttle(function() {
			Pro.Motion.reload();
		}, 5000);
		
		var session = editor.getSession().on('change', update);
				
});