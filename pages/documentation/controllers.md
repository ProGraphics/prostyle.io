---
layout: page-doc
title: "Controllers"
desc: "Controllers enable user interaction and can provide visual feedback of the state of the player."
permalink: "/controllers/"
---

## Overview
{: class='t0'}
Controllers _control_ how a story plays. They usually provide mechanisms for users to interact with your story.  They may also provide visual feedback about the state of the animation.

### Story Controllers

Each story may optionally have a <code>controllers</code> entry with a list of configured controllers to use for that story. If an empty array is given, the story won't use any controllers. If no <code>controllers</code> entry is given then the story will use the _default_ controllers.

### Default Controllers

The default set of controllers is listed in an array at <code>ProStyle.defaultControllers</code>. All stories on an HTML page will use these controllers unless the controllers are explicitly defined for the story. These values may be overridden with JavaScript.

{% highlight javascript %}
ProStyle.defaultControllers = [
	{controllerType: "auto"},
	{controllerType: "resize"}
]
{% endhighlight %}



<hr class="t60 b60">



## Auto
The _auto_ controller configures the _automatic_ behavior of the player. Use it to make the player start and advance automatically, without user interaction.

### Options
{% include controller-option.html label="start" content="auto-start.md" %}
{% include controller-option.html label="stepAdvance" content="auto-step-advance.md" %}
{% include controller-option.html label="restart" content="auto-restart.md" %}



<hr class="t60 b60">



## Debug
The _debug_ controller displays status information in the upper-left corner of the canvas.  It shows the elaspsed time, completion percentage, and the zero-based indexes of the current flow, page and step. 

### Options
{% include controller-option.html label="cssClass" content="debug-css-class.md" %}



<hr class="t60 b60">




## Keyboard
The _keyboard_ controller maps user interaction to playback activity. The user presses keys on a keyboard or related device, such as a presentation clicker, to start, pause, restart, advance, or rewind the player.

There are seven actions that can be triggered. Each has a default set of key codes that trigger the action, but they can be overridden with the <code>keys</code> option.


<table>
	<thead><tr><th>Action</th><th>Description</th></tr></thead>
	<tbody><tr><td><em>play</em></td><td>
		Starts playback at the current position if it is currently paused.
		<table class="nested-table">
			<thead><tr><th>KeyCode</th><th>Key</th></tr></thead>
			<tbody>
				<tr><td>13</td><td>Enter</td></tr>
				<tr><td>116</td><td>F5</td></tr>
			</tbody>
		</table>
	</td></tr><tr><td><em>pause</em></td><td>
		Stops playback at the current position if it is currently playing.
		<table class="nested-table">
			<thead><tr><th>KeyCode</th><th>Key</th></tr></thead>
			<tbody>
				<tr><td>19</td><td>Pause</td></tr>
				<tr><td>27</td><td>Escape</td></tr>
			</tbody>
		</table>
	</td></tr><tr><td><em>toggle</em></td><td>
		Toggles between <em>play</em> and <em>pause</em>.
		<table class="nested-table">
			<thead><tr><th>KeyCode</th><th>Key</th></tr></thead>
			<tbody>
				<tr><td>32</td><td>Space</td></tr>
			</tbody>
		</table>
	</td></tr><tr><td><em>back</em></td><td>
		The playhead rewinds to the start of the current step. If the playhead is already at the start of the step, it rewinds to the start of the previous step.
		<table class="nested-table">
			<thead><tr><th>KeyCode</th><th>Key</th></tr></thead>
			<tbody>
				<tr><td>8</td><td>Backspace</td></tr>
				<tr><td>33</td><td>Page Up</td></tr>
				<tr><td>37</td><td>Left</td></tr>
				<tr><td>38</td><td>Up</td></tr>
				<tr><td>188</td><td>Comma</td></tr>
			</tbody>
		</table>
	</td></tr><tr><td><em>next</em></td><td>
		If the playhead is at the beginning of a step, it starts playing. Otherwise, it fast forwards to the next step and then starts playing.
		<table class="nested-table">
			<thead><tr><th>KeyCode</th><th>Key</th></tr></thead>
			<tbody>
				<tr><td>34</td><td>Page Down</td></tr>
				<tr><td>39</td><td>Right</td></tr>
				<tr><td>40</td><td>Down</td></tr>
				<tr><td>9</td><td>Tab</td></tr>
			</tbody>
		</table>
	</td></tr><tr><td><em>start</em></td><td>
		Positions the playhead at the beginning of the story.
		<table class="nested-table">
			<thead><tr><th>KeyCode</th><th>Key</th></tr></thead>
			<tbody>
				<tr><td>36</td><td>Home</td></tr>
				<tr><td>190</td><td>Period ('blank screen' in PowerPoint)</td></tr>
			</tbody>
		</table>
	</td></tr><tr><td><em>end</em></td><td>
		Positions the playhead at the end of the story.
		<table class="nested-table">
			<thead><tr><th>KeyCode</th><th>Key</th></tr></thead>
			<tbody>
				<tr><td>35</td><td>End</td></tr>
			</tbody>
		</table>
	</td></tr></tbody>
</table>

### Options
{% include controller-option.html label="keys" content="keyboard-keys.md" %}



<hr class="t60 b60">




## MouseMove
The _mousemove_ controller...

### Options
_undocumented_



<hr class="t60 b60">




## MouseWheel
The _mousewheel_ controller...

### Options
_undocumented_



<hr class="t60 b60">




## Resize
The _resize_ controller monitors for resizing of the browser window. If the story's canvas size changes, the resize controller rebuilds the story animation to match the new size.  

### Options
{% include controller-option.html label="throttleDelay" content="resize-throttle-delay.md" %}



<hr class="t60 b60">




## Tap
The _tap_ controller segments the canvas into four areas that can be tapped or clicked to control playback. There are two rows. The first row contains tap areas that correspond to the _back_, _toggle_, and _next_ actions. The second row is a non-visible trackbar. The timeline will seek the story to the position relative to where on the tap area was hit. The relative sizes of the rows and the relative sizes of the tap areas on the first row are configurable.

The _tap_ controller is used on the [front page's](/) splash animation.

### Options
{% include controller-option.html label="playbuttonSizes" content="tap-play-button-sizes.md" %}
{% include controller-option.html label="rowSizes" content="tap-row-sizes.md" %}
{% include controller-option.html label="cursors" content="tap-cursors.md" %}



<hr class="t60 b60">




## Track
The _track_ controller renders a trackbar at the bottom of the story.  The user can seek the timeline to any position by clicking on the bar.  It also provides control buttons to play and pause, rewind, and play next.

The track controller can be seen in the [gallery](/gallery/). All gallery examples use it.

### Options
{% include controller-option.html label="color" content="track-color.md" %}
{% include controller-option.html label="highlightColor" content="track-highlight-color.md" %}
{% include controller-option.html label="backColor" content="track-back-color.md" %}
{% include controller-option.html label="stepColor1" content="track-step-color-1.md" %}
{% include controller-option.html label="stepColor2" content="track-step-color-2.md" %}