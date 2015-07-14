$(function() {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/clouds");
    editor.getSession().setMode("ace/mode/javascript");
		editor.setOptions({
				maxLines: 10000
		});
});