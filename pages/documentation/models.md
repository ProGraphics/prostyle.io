---
layout: tocify
title: "Models"
teaser: "The documentation is a work in progress..."
permalink: "/docs/models/"
ace-readonly-js: true;
---
## Overview
{: class='t0'}
Models are the _things_ that exist within the story. They physically exist as web content. They can be [configured](/docs/concepts/#setup), [styled](/docs/concepts/#properties) and [positioned](/docs/concepts/#placement). Their properties may be animated with [scripts](/docs/concepts/#scripts).

| Model | Description  |
|:-:|---|
| [Canvas](#){:data-toc='canvas'} | The canvas is the drawing surface of the animation.  It is mapped to a single <code>div</code> element or the <code>body</code> element of an HTML page. The HTML element might be any rectangular size. For example, a body tag stretches to fit the browser window. There is only one canvas. |
| [Frame](#){:data-toc='frame'}  | The frame is centered within and stretches to fit the canvas, minus any padding. However, unlike the canvas, the frame always maintains a configured aspect ratio. There is only one frame. |
| [Flows](#){:data-toc='flows'}  | Flows control page-to-page animation, such as page stacks, carousels, etc. Each flow contains one or more pages. |
| [Pages](#){:data-toc='pages'}  | Pages contain the item content. The timeline navigates from page to page. Pages are analogous to slides in old-school presentation software. |
| [Items](#){:data-toc='items'}  | Items are the core visuals, such as text, images, and charts. |

### Property Sets
All model objects, except [flows](#){:data-toc="flows"}, have at least one set of [properties](/docs/properties/). For example, a [text item](#){:data-toc="&middot;-text-item"} has properties to _position_ and _rotate_ the text.  Each property may have its default values overridden in an <code>init</code> block. The values may also be changed later in a [script](/docs/concepts/#scripts).

{% include alert story="/examples/colors/" %}
<pre data-ace="readonly" style="width:100%;">{
  item: {
    text: "COLOR",
    init: {color:"red", font:40, style:"bold"},
    actions:[
      {anim:2, color:"#567"},
      {anim:2, color:"rgba(127,15,127,0.8)"},
      {anim:2, color:"red"}
    ]
  }
}</pre>


#### Multiple

Some model objects have more than one set of properties.  The main set of properties uses the <code>init</code> and <code>scripts</code> entries. The additional property sets use entries named to match the set.

For example, the [simple bar chart](#){:data-toc="&middot;-simple-bar-chart"} has a main set of chart properties, such as _position_, which apply to the overall chart. It also has properties for the individual bars, which are initialized with <code>barsInit</code> and scripted with <code>barScripts</code>.

The [text item](#){:data-toc="&middot;-text-item"} actually has _four_ sets of properties; one for the overall text, plus one for each of the sets of lines, words, and characters.  Therefore, a text item might have <code>init</code>, <code>scripts</code>, <code>linesInit</code>, <code>lineScripts</code>, <code>wordsInit</code>, <code>wordScripts</code>, <code>charsInit</code> and <code>charScripts</code> entries.

#### Canvas &amp; Frame Scripts
Because [step scripts](/docs/concepts/#steps) are only available for _pages_ and _items_, the canvas and frame must be scripted on a page, using <code>canvasScripts</code> and <code>frameScripts</code> entries. The canvas and frame properties are animated relative to when a _page_ reaches a _step_.

<hr class="t60 b60">

## Canvas
The _canvas_ is the outermost container. It is mapped onto a single <code>div</code> or <code>body</code> tag of an HTML page.  Think of the canvas as the drawing surface.  The div or body tag might be any size, and may even be resized later. Pro Motion will stretch it’s content to fit, regardless of the aspect ratio of the canvas.

The canvas contains a single [frame](#){:data-toc='frame'}.

### Setup
{% include model-setup.html label="padding" content="canvas-padding.md" %}
{% include model-setup.html label="imageRootUrl" content="canvas-imageRootUrl.md" %}

### Properties
Canvas properties may be [scripted](/docs/concepts/#scripts) with a <code>canvasScripts</code> entry on a page.
{% include model-props.html label="animation" content="standard-animation.md" %}
{% include model-props.html label="background" content="standard-background.md" %}
{% include model-props.html label="border" content="standard-border.md" %}
{% include model-props.html label="corners" content="standard-corners.md" %}
{% include model-props.html label="crop" content="standard-crop.md" %}
{% include model-props.html label="font" content="canvas-font.md" %}
{% include model-props.html label="opacity" content="standard-opacity.md" %}
{% include model-props.html label="shadow" content="standard-shadow.md" %}
{% include model-props.html label="textColor" content="standard-text-color.md" %}

### Example
_undocumented_

<hr class="t60 b60">

## Frame
Each story has only one _frame_. It is nested as a direct child of the [canvas](#){:data-toc="canvas"}. The frame contains one or more [flow](#){:data-toc="flows"} objects.

Like the canvas, the frame will resize as needed.  Unlike the canvas, though, the frame always maintains an aspect ratio. So regardless of how the canvas is stretched, the frame will always have the same relative proportions. The frame stays centered within the canvas.

### Setup
{% include model-setup.html label="aspectRatio" content="frame-aspect-ratio.md" %}
{% include model-setup.html label="padding" content="frame-padding.md" %}

### Properties
_undocumented_

### Virtual Camera
The frame brings each of it’s child flows to the forefront, one after the other.  Since all of the flows are laid out in [3D](/docs/concepts/#3d) space, they all appear to move as the view changes.  It’s natural to think of it like a camera flying around from one flow to the next.

### Demonstration
As the canvas is resized, the frame resizes to fit. However, the frame always maintains it's aspect ratio.  All of the content within the frame will be resized to fit as well, relative to the frame's aspect ratio.

<div class="row">
	<div class="medium-9 large-7 medium-centered large-centered columns">
		<div data-pro-motion="frame">frame</div>		
	</div>
</div>

<hr class="t0 b60">

## Flows
_undocumented_


##&middot; Simple Flow
{:class="font-size-h3"}
_undocumented_

### Setup
{:class="font-size-h4"}
_undocumented_

### Properties
{:class="font-size-h4"}
_undocumented_

### Example
{:class="font-size-h4"}
_undocumented_

<hr class="t60 b60">

##&middot; Stack Flow
{:class="font-size-h3"}
_undocumented_

### Setup
{:class="font-size-h4"}
_undocumented_

### Properties
{:class="font-size-h4"}
_undocumented_

### Example
{:class="font-size-h4"}
_undocumented_

<hr class="t60 b60">

## Pages
_undocumented_

### Setup
_undocumented_

### Properties
_undocumented_

### Example
_undocumented_

<hr class="t60 b60">

## Items
_undocumented_


##&middot; Text Item
{:class="font-size-h3"}
_undocumented_

### Setup
{:class="font-size-h4"}
_undocumented_

### Properties
{:class="font-size-h4"}
_undocumented_

### Example
{:class="font-size-h4"}
_undocumented_

<hr class="t60 b60">

##&middot; Image Item
{:class="font-size-h3"}
_undocumented_

### Setup
{:class="font-size-h4"}
_undocumented_

### Properties
{:class="font-size-h4"}
_undocumented_

### Example
{:class="font-size-h4"}
_undocumented_

<hr class="t60 b60">

##&middot; Layer Item
{:class="font-size-h3"}
_undocumented_

### Setup
{:class="font-size-h4"}
_undocumented_

### Properties
{:class="font-size-h4"}
_undocumented_

### Example
{:class="font-size-h4"}
_undocumented_

<hr class="t60 b60">

##&middot; Simple Bar Chart
{:class="font-size-h3"}
_undocumented_

### Setup
{:class="font-size-h4"}
_undocumented_

### Properties
{:class="font-size-h4"}
_undocumented_

### Example
{:class="font-size-h4"}
_undocumented_