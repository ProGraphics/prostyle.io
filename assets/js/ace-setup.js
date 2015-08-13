$(function() {

	var $btnJson1 = $("#btnJson1");
	var $btnJson2 = $("#btnJson2");
	var $btnJson3 = $("#btnJson3");
	var $btnUpdateAnim = $("#btnUpdateAnim");

	var json1 = $("#editor").text();
	var json2 = $("#editor2").text();
	var json3 = $("#editor3").text();

	$("#editor2").remove();
	$("#editor3").remove();

	if (json2.length == 0) {
		$btnJson1.text("Reset");
		$btnJson2.css("display", "none");
		$btnJson3.css("display", "none");
	}
	else if (json3.length == 0) {
		$btnJson3.css("display", "none");
	}

    var editor = ace.edit("editor");
	var session = editor.getSession();
	
    session.setOptions({
		mode: "ace/mode/javascript",
		tabSize:2
	});
	
	editor.setOptions({
			maxLines: 10000,
			theme: "ace/theme/clouds"
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

	var update = function() {
		clearTimeout(throttleTimer);
		$btnUpdateAnim.attr("disabled","disabled");
		try {
			var value = editor.getValue().trim();
			if (value.indexOf("story = {") !== 0 || value.slice(value.length-2) !== "};") {
				showError("<i>Invalid format. It should be:</i><br><br>story = { ... };");
			}
			else {
				$("[data-prostyle='animation']").removeClass("anim-error");
				value = value.slice(8, value.length - 1);
				ProStyle.Stories.animation = JSON5.parse(value);
				ProStyle.reload();
			}
		}
		catch(err) {
			showError("<i>Error:</i><br><br>" + err.message);
		}
	};

	var showError = function(msg) {
		var $animation = $("[data-prostyle='animation']");
		$animation.html(msg);
		$animation.removeAttr("style");
		$animation.removeAttr("class");
		$animation.addClass("anim-error");
	}

	var throttledUpdate = throttle(function() {	update(); }, 10000);

	session.on('change', function() {
		$btnUpdateAnim.removeAttr("disabled");
		var value = editor.getValue().trim();
		$btnJson1.attr("disabled", "disabled");
		$btnJson2.attr("disabled", "disabled");
		$btnJson3.attr("disabled", "disabled");
		if (value!==json1.trim()) $btnJson1.removeAttr("disabled");
		if (value!==json2.trim()) $btnJson2.removeAttr("disabled");
		if (value!==json3.trim()) $btnJson3.removeAttr("disabled");
		throttledUpdate();
	});

	$btnJson1.click(function() {
		editor.setValue(json1, -1);
		editor.focus();
		update();
	});

	$btnJson2.click(function() {
		editor.setValue(json2, -1);
		editor.focus();
		update();
	});

	$btnJson3.click(function() {
		editor.setValue(json3, -1);
		editor.focus();
		update();
	});

	$btnUpdateAnim.click(function() {
		editor.focus();
		update();
	});
	
	editor.focus();
});