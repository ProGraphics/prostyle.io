---
layout: page-doc
title: "Models"
permalink: "/models/"
---
## Overview
{: class='t0'}
Models are the _things_ that exist within the story. They physically exist as web content. They can be [configured](/concepts/#setup), [styled](/concepts/#properties) and [positioned](/concepts/#placement). Their properties may be animated with [scripts](/concepts/#scripts).

| Model | Description  |
|:-:|---|
| [Canvas](#){:data-toc='canvas'} | The canvas is the drawing surface of the animation.  It is mapped to a single <code>div</code> element or the <code>body</code> element of an HTML page. The HTML element might be any rectangular size. For example, a body tag stretches to fit the browser window. There is only one canvas. |
| [Frame](#){:data-toc='frame'}  | The frame is centered within and stretches to fit the canvas, minus any padding. However, unlike the canvas, the frame always maintains a configured aspect ratio. There is only one frame. |
| [Flows](#){:data-toc='flows'}  | Flows control page-to-page animation, such as page stacks, carousels, etc. Each flow contains one or more pages. |
| [Pages](#){:data-toc='pages'}  | Pages contain the item content. The timeline navigates from page to page. Pages are analogous to slides in old-school presentation software. |
| [Items](#){:data-toc='items'}  | Items are the core visuals, such as text, images, and charts. |

### Property Sets
All model objects, except [flows](#){:data-toc="flows"}, have at least one set of [properties](/properties/). For example, a [text item](#){:data-toc="&middot;-text-item"} has properties to _position_ and _rotate_ the text.  Each property may have its default values overridden in an <code>init</code> block. The values may also be changed later in a [script](/concepts/#scripts).

{% include alert story="/examples/color-cycling/" %}
{% highlight javascript %}{
  item: {
    text: "COLOR",
    init: {color:"red", font:40, style:"bold"},
    actions:[
      {anim:2, color:"#567"},
      {anim:2, color:"rgba(127,15,127,0.8)"},
      {anim:2, color:"red"}
    ]
  }
}{% endhighlight %}


#### Multiple

Some model objects have more than one set of properties.  The main set of properties uses the <code>init</code> and <code>scripts</code> entries. The additional property sets use entries named to match the set.

For example, the [simple bar chart](#){:data-toc="&middot;-simple-bar-chart"} has a main set of chart properties, such as _position_, which apply to the overall chart. It also has properties for the individual bars, which are initialized with <code>barsInit</code> and scripted with <code>barScripts</code>.

The [text item](#){:data-toc="&middot;-text-item"} actually has _four_ sets of properties; one for the overall text, plus one for each of the sets of lines, words, and characters.  Therefore, a text item might have <code>init</code>, <code>scripts</code>, <code>linesInit</code>, <code>lineScripts</code>, <code>wordsInit</code>, <code>wordScripts</code>, <code>charsInit</code> and <code>charScripts</code> entries.

#### Canvas &amp; Frame Scripts
Because [step scripts](/concepts/#steps) are only available for _pages_ and _items_, the canvas and frame must be scripted on a page, using <code>canvasScripts</code> and <code>frameScripts</code> entries. The canvas and frame properties are animated relative to when a _page_ reaches a _step_.

<hr class="t60 b60">

## Canvas
The _canvas_ is the outermost container. It is mapped onto a single <code>div</code> or <code>body</code> tag of an HTML page.  Think of the canvas as the drawing surface.  The div or body tag might be any size, and may even be resized later. ProStyle will stretch it’s content to fit, regardless of the aspect ratio of the canvas.

The canvas contains a single [frame](#){:data-toc='frame'}.

### Setup
{% include model-setup.html label="padding" content="canvas-padding.md" %}
{% include model-setup.html label="imageRootUrl" content="canvas-imageRootUrl.md" %}

### Properties
Canvas properties may be [scripted](/concepts/#scripts) with a <code>canvasScripts</code> entry on a page.
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
Frame properties may be [scripted](/concepts/#scripts) with a <code>frameScripts</code> entry on a page.
{% include model-props.html label="animation" content="standard-animation.md" %}
{% include model-props.html label="background" content="standard-background.md" %}
{% include model-props.html label="border" content="standard-border.md" %}
{% include model-props.html label="corners" content="standard-corners.md" %}
{% include model-props.html label="crop" content="standard-crop.md" %}
{% include model-props.html label="opacity" content="standard-opacity.md" %}
{% include model-props.html label="shadow" content="standard-shadow.md" %}

### Virtual Camera
The frame brings each of it’s child flows to the forefront, one after the other.  Since all of the flows are laid out in [3D](/concepts/#3d) space, they all appear to move as the view changes.  It’s natural to think of it like a camera flying around from one flow to the next.

### Demonstration
As the canvas is resized, the frame resizes to fit. However, the frame always maintains it's aspect ratio.  All of the content within the frame will be resized to fit as well, relative to the frame's aspect ratio.

<div class="row">
	<div class="medium-9 large-7 medium-centered large-centered columns">
		<div data-prostyle="frame">frame</div>		
	</div>
</div>

<hr class="t0 b60">

## Flows
_Flows_ provide complex orchestration and animation between [pages](#){:data-toc="pages"}. For that reason, they are sometimes referred to as _page flows_. Every story has at least one flow, but might have many.

Flows are positioned in [3D](/concepts/#3d) space and brought into the frame in order, one after the other.  As the last page of a flow completes, the [virtual camera](#){:data-toc="virtual-camera"} moves to show the first page of the next flow.


##&middot; Simple Flow
{:class="font-size-h3"}
The _Simple_ flow is simply a stack of pages directly on top of each other. When transitioning between pages, the current one is faded out and the next is faded in. While it is technically a flow, there is no motion page-to-page motion.

Simple flow is the default flow. It will be used if the <code>flowType</code> entry is not specified.

### Setup
{:class="font-size-h4"}
{% include model-setup.html label="pageClass" content="flow.simple-pageClass.md" %}
{% include model-setup.html label="pageAspectRatio" content="flow.common-pageAspectRatio.md" %}
{% include model-setup.html label="placement" content="flow.common-placement.md" %}

### Example
{:class="font-size-h4"}
{% highlight javascript %}{
  flowType: "simple",
  placement: { position:[100,-100,0], rotation:[0,0,0], scale:100 },
  pageClass: "simplePage" 
  pages: [
    {},
    {}
  ]
}
{% endhighlight %}{


<hr class="t60 b60">

##&middot; Stack Flow
{:class="font-size-h3"}

The _Stack_ flow is a premium extension that comes with [ProStyle Plus](/plus/).  It transitions it's pages from one stack to another. Each page begins on the _future_ stack, becomes the _current_ page, and then moves to the _past_ stack.

The [placement](/concepts/#placement) of the stacks, and the offset of each page in each stack may be configured. It is quite flexible.

### Setup
{:class="font-size-h4"}
{% include model-setup.html label="pageClass" content="flow.stack-pageClass.md" %}
{% include model-setup.html label="pageAspectRatio" content="flow.common-pageAspectRatio.md" %}
{% include model-setup.html label="placement" content="flow.common-placement.md" %}
{% include model-setup.html label="stacks" content="flow.stack-stacks.md" %}


### Example
{:class="font-size-h4"}

{% include alert story="/gallery/page-stacks/" %}
{% highlight javascript %}{
	classes:{
		stackedPage: { border:[5,"orange"] }
	},
	flow:{
		flowType:"stack",
		pageAspectRatio:1.333,
		placement:{ pos:[-100,-100,0]},
		stacks:{
			current:{ pos:[-5,-10,-10], rot:[-10,15,-10], scale:100, opacity:100 },
			future:{ pos:[-33,-45,-35], rot:[-10,15,-10], scale:100, opacity:80,
				offset:{ pos:[-10,-9,-4], rot:[0,-5,3], scale:100, opacity:80 }},
			past:{ pos:[70,70,100], rot:[0,10,-5], scale:100, opacity:0,
				offset:{ pos:[0,0,0], rot:[0,0,0], scale:100, opacity:0 }}
		},
		pages:[
			{ item:{ text:["A 'Page Stack' with", "custom configuration."]} },
			{ item:{ text:"2"} },
			{ item:{ text:"3"} },
			{ item:{ text:"4"} },
			{ item:{ text:"5"} },
			{ item:{ text:"6"} },
			{ item:{ text:"7"} },
		]
	}
}
{% endhighlight %}

<hr class="t60 b60">

## Pages
Pages contain zero or more [items](#){:data-toc="items"}, although a page without items is kind of boring. Items on a page may be [animated](/concepts/#animation). Also, pages themselves may be animated as part of a [flow](#){:data-toc="flows"}.

### Properties
{% include model-props.html label="animation" content="standard-animation.md" %}
{% include model-props.html label="background" content="standard-background.md" %}
{% include model-props.html label="border" content="standard-border.md" %}
{% include model-props.html label="color" content="page-text-color.md" %}
{% include model-props.html label="corners" content="standard-corners.md" %}
{% include model-props.html label="crop" content="standard-crop.md" %}
{% include model-props.html label="font" content="page-font.md" %}
{% include model-props.html label="opacity" content="standard-opacity.md" %}
{% include model-props.html label="shadow" content="standard-shadow.md" %}
{% include model-props.html label="textShadow" content="page-text-shadow.md" %}


<hr class="t60 b60">

## Items
Items are the core visuals, such as text, images, charts, etc. Items are always [placed](/concepts/#placement) on a [page](#){:data-toc="pages"}. They may be animated independently.


##&middot; Text Item
{:class="font-size-h3"}
The _text item_ is used to add single-line or multiple-line text to a page. Properties may be applied at the text, line, word or character level. Many of the property values inherit. For instance, setting text color on the lines affects all the words and characters, unless words or characters explicitly override it.

The text, lines, words and characters make up a four level hierarchy. Each may be [positioned](/concepts/#placement) in [3D](/concepts/#3d) space, relative to where it would normally be.

A _line_ might be made up of a single word, or multiple sentences. If the [textWidth](/properties/#text-width) property is used to induce word wrapping, a single line might wrap into multiple rendered lines. Regardless, it is still animated as a single line. This makes it possible to animate paragraphs, if desired.

### Setup
{:class="font-size-h4"}
{% include model-setup.html label="text" content="item.text-text.md" %}

### Properties
{:class="font-size-h4"}
Properties are initialized with an <code>init</code> entry and scripted with [scripts](/concepts/#scripts).  You may also use <code>lineInit</code> and <code>lineScripts</code> to set properties on lines, <code>wordInit</code> and <code>wordScripts</code> to set properties on words, and <code>charInit</code> and <code>charScripts</code> to set properties on characters.  The plural form, <code>linesInit</code>, <code>linesScripts</code>, and so on, are available as aliases.

Lines, words and characters may have [staggered](/concepts/#staggering) animation.

Unless otherwise noted, each of the following properties may be used with text, lines, words and characters.

{% include model-props.html label="animation" content="standard-animation.md" %}
{% include model-props.html label="anchor" content="item.text-anchor.md" %}
{% include model-props.html label="background" content="standard-background.md" %}
{% include model-props.html label="border" content="standard-border.md" %}
{% include model-props.html label="bullets" content="item.text-bullets.md" %}
{% include model-props.html label="corners" content="standard-corners.md" %}
{% include model-props.html label="crop" content="item.text-crop.md" %}
{% include model-props.html label="font" content="page-font.md" %}
{% include model-props.html label="opacity" content="standard-opacity.md" %}
{% include model-props.html label="padding" content="standard-padding.md" %}
{% include model-props.html label="position" content="standard-position.md" %}
{% include model-props.html label="rotation" content="standard-rotation.md" %}
{% include model-props.html label="scale" content="standard-scale.md" %}
{% include model-props.html label="shadow" content="standard-shadow.md" %}
{% include model-props.html label="skew" content="standard-skew.md" %}
{% include model-props.html label="textAlign" content="item.text-text-align.md" %}
{% include model-props.html label="textColor" content="item.text-text-color.md" %}
{% include model-props.html label="textShadow" content="item.text-text-shadow.md" %}
{% include model-props.html label="textStyle" content="item.text-text-style.md" %}
{% include model-props.html label="textWidth" content="item.text-text-width.md" %}
{% include model-props.html label="transformOrigin" content="item.text-transform-origin.md" %}


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