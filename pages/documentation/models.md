---
layout: tocify
title: "Models"
teaser: "The documentation is a work in progress..."
permalink: "/docs/models/"
ace-readonly-js: true;
---
## Overview
{: class='t0'}
Models are the _things_ that exist within the story. They physically exist as web content. They can be [configured](/docs/concepts/#setup), [styled](/docs/properties/) and [positioned](/docs/concepts/#placement). Their properties may be animated with scripts.

| Model | Description  |
|:-:|---|
| [Canvas](#){:data-toc='canvas'} | The canvas is the drawing surface of the animation.  It is mapped to a single <code>div</code> element or the <code>body</code> element of an HTML page. The HTML element might be any rectangular size. For example, a body tag stretches to fit the browser window. There is only one canvas. |
| [Frame](#){:data-toc='frame'}  | The frame is centered within and stretches to fit the canvas, minus any padding. However, unlike the canvas, the frame always maintains a configured aspect ratio. There is only one frame. |
| [Flows](#){:data-toc='flows'}  | Flows control page-to-page animation, such as page stacks, carousels, etc. Each flow contains one or more pages. |
| [Pages](#){:data-toc='pages'}  | Pages contain the item content. The timeline navigates from page to page. Pages are analogous to slides in old-school presentation software. |
| [Items](#){:data-toc='items'}  | Items are the core visuals, such as text, images, and charts. |


## Canvas
The Canvas is the outermost container. It is mapped onto a single <code>div</code> or <code>body</code> tag of an HTML page.  Think of the canvas as the drawing surface.  The div or body tag might be any size, and may even be resized later. Pro Motion will stretch it’s content to fit, regardless of the aspect ratio of the canvas.

The canvas contains a single [frame](#){:data-toc='frame'} .

### Setup
{% include model-setup.html label="padding" content="canvas-padding.md" %}
{% include model-setup.html label="imageRootUrl" content="canvas-imageRootUrl.md" %}

### Properties
_undocumented_

### Example
_undocumented_


## Frame
_undocumented_

### Setup
_undocumented_

### Properties
_undocumented_

### Example
_undocumented_


## Flows

##&middot; Simple Flow
_undocumented_

### Setup
_undocumented_

### Properties
_undocumented_

### Example
_undocumented_


##&middot; Stack Flow
_undocumented_

### Setup
_undocumented_

### Properties
_undocumented_

### Example
_undocumented_


## Pages
_undocumented_

### Setup
_undocumented_

### Properties
_undocumented_

### Example
_undocumented_


## Items

##&middot; Text Item
_undocumented_

### Setup
_undocumented_

### Properties
_undocumented_

### Example
_undocumented_


##&middot; Image Item
_undocumented_

### Setup
_undocumented_

### Properties
_undocumented_

### Example
_undocumented_


##&middot; Layer Item
_undocumented_

### Setup
_undocumented_

### Properties
_undocumented_

### Example
_undocumented_


##&middot; Simple Bar Chart
_undocumented_

### Setup
_undocumented_

### Properties
_undocumented_

### Example
_undocumented_