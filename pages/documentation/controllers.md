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


## Debug
The _debug_ controller...

### Options
_undocumented_



<hr class="t60 b60">




## Keyboard
The _keyboard_ controller...

### Options
_undocumented_



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
The _resize_ controller...

### Options
_undocumented_



<hr class="t60 b60">




## Tap
The _tap_ controller...

### Options
_undocumented_



<hr class="t60 b60">




## Track
The _track_ controller...

### Options
_undocumented_