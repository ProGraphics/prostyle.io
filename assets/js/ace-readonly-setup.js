$(function() {
	$("pre[data-ace]").each(function(index) {
		var editor = ace.edit(this);
		editor.setOptions({
				maxLines: 10000,
				readOnly: true,
				mode: "ace/mode/javascript",
				theme: "ace/theme/clouds",
				useWorker: false,
				showPrintMargin: false
		});
	});
});