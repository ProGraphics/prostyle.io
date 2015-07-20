---
layout: tocify
title: "Properties"
teaser: "The documentation is a work in progress..."
permalink: "/docs/properties/"
ace-readonly-js: true;
---
## Overview
{: class='t0'}
A property sets the _appearance_ or [placement](/docs/concepts/#placement) of a [model](/docs/models/) object.  Property values are initialized with an <code>init</code> entry and may be [scripted](/docs/concepts/#scripts) to change over time. e.g. [Rotation](#){:data-toc="rotation"}. There are also [pseudo properties](#){:data-toc="pseudo-properties"}, which are similar to regular properties but instruct _how_ to alter properties.

### Values
Each property is composed of one or more values.  For instance, the [font](#){:data-toc="font"} property has both _size_ and _family_ values.  A [position](#){:data-toc="position"} has _x_, _y_ and _z_ dimensions. Pro Motion allows you to set and animate individual property values separately or together.  This enables you to create simple animations easily, yet provides the flexibility to craft complex ones.

### Formats
Since you might only need to define a subset of a property’s values, different formats may be used: object, number, string, boolean, or array.  The appropriate formats for a property depends on the set of values and the nature of the property. For instance, each of the following is a valid representation of a _position_.

<div class="row">
	<div class="large-6 columns">
		<pre data-ace="readonly" style="width:100%;">position: {x:10, y:-20, z:30}</pre>
	</div>
	<div class="large-6 columns">
		<pre data-ace="readonly" style="width:100%;">position: [10, -20, 30]</pre>
	</div>
	<div class="large-6 columns">
		<pre data-ace="readonly" style="width:100%;">position: "10,-20,30"</pre>
	</div>
	<div class="large-6 columns">
		<pre data-ace="readonly" style="width:100%;">position: {x:-10, y:-20}</pre>
	</div>
		<div class="large-6 columns">
		<pre data-ace="readonly" style="width:100%;">position: [10, -20]</pre>
	</div>
	<div class="large-6 columns">
		<pre data-ace="readonly" style="width:100%;">position: "10,-20"</pre>
	</div>
	<div class="large-6 columns">
		<pre data-ace="readonly" style="width:100%;">position: 10</pre>
	</div>
	<div class="large-6 columns">
		<pre data-ace="readonly" style="width:100%;">position: false</pre>
	</div>
</div>

{% include name-value.html label="Object" content="prop-format-object.md" %}
{% include name-value.html label="Array" content="prop-format-array.md" %}
{% include name-value.html label="String" content="prop-format-string.md" %}
{% include name-value.html label="Number" content="prop-format-number.md" %}
{% include name-value.html label="Boolean" content="prop-format-boolean.md" %}

Which format should you use? That’s up to you. Generally, shorter formats improve readability, but that’s subjective. Use whichever format you prefer.

### Pseudo-Properties
Most properties alter the appearance or placement of something.  However, there are a few special cases that are a bit different.  They are grouped together with regular properties because they are configured in the same manner, with <code>init</code> blocks and/or [script](/docs/concepts/#scripts) actions.

* [Animation](#){:data-toc="animation"}
* [Class](#){:data-toc="class"}
* [Delay](#){:data-toc="delay"}
* [Move To](#){:data-toc="move-to"}

### Classes
Use a _class_ to define property values once and reuse them in multiple places. Currently, classes may only be used in <code>init</code> blocks.

Classes are not necessarily aligned to a [model object](/docs/models/) or [property set](/docs/models/#property-sets). A class may define any arbitrary set of properties. It might contain only a subset of a model object’s properties, or might contain properties for multiple model objects. A model object will use the properties it understands and simply ignore the rest.

{% include alert story="/examples/class/" %}
<pre data-ace="readonly" style="width:100%;">{
  classes: {
    emboss: {
      color:"#FFF",
      font:80,
      opacity:0,
      textShadow:[-0.2,-0.2,0.7]
    }
  },
  frame: {
    aspectRatio:4
  },
  items: [
    {
      text: "1..",
      init: {class:"emboss", pos:-30},
      action: {delay:1, opacity:100}
    },
    {
      text:"2..",
      init: {class:"emboss"},
      action: {delay:2, opacity:100}
    },
    {
      text: "3..",
      init: {class:"emboss", pos:30},
      actions: [{delay:3, opacity:100}, {delay:1}]
    }
  ]
}</pre>

<hr class="t60 b60">

## Animation
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Anchor
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Background
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Border
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Bullets
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Class
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Corners
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Crop
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Data
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Delay
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Fill
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Font
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Move To
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Opacity
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Padding
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Position
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Rotation
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Scale
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Shadow
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Size
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Skew
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Text Align
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Text Color
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Text Shadow
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Text Style
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Text Width
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_


<hr class="t60 b60">

## Transform Origin
_undocumented_

### Values
_undocumented_

### Formats
_undocumented_

### Example
_undocumented_
