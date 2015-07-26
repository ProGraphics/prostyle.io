---
layout: tocify
title: "Properties"
teaser: "The documentation is a work in progress..."
permalink: "/docs/properties/"
ace-readonly-js: true;
---
## Overview
{: class='t0'}
A property defines _appearance_ or [placement](/docs/concepts/#placement) of a [model](/docs/models/) object.  Property values are initialized with an <code>init</code> entry and may be [scripted](/docs/concepts/#scripts) to change over time. e.g. [Rotation](#){:data-toc="rotation"}. There are also [pseudo properties](#){:data-toc="pseudo-properties"}, which are similar to regular properties but instruct _how_ to alter properties.

### Values
Each property is composed of one or more values.  For instance, the [font](#){:data-toc="font"} property has both _size_ and _family_ values.  A [position](#){:data-toc="position"} has _x_, _y_ and _z_ dimensions. Pro Motion allows you to set and animate individual property values separately or together.  This enables you to create simple animations easily, yet provides the flexibility to craft complex ones.

### Formats
Since you might only need to change a subset of a property’s values, there are different formats which make it easier to change particular values.  The available formats for a property depends upon the set of values and the nature of the property. For instance, each of the following is a valid representation of a _position_.

<div class="row b20">
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

<p class="t20">
Which format should you use? That’s up to you. Generally, shorter formats improve readability, but that’s subjective. Use whichever format you prefer.
</p>

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
The <code>animation</code> pseudo-property defines the characteristics of an [animation](/docs/concepts/#animation), such as how long it will take, or how many times it will repeat.

* _alias:_ <code>anim</code>

### Values
{% include prop-value.html label="duration" content="animation-duration.md" %}
{% include prop-value.html label="ease" content="animation-ease.md" %}
{% include prop-value.html label="repeat" content="animation-repeat.md" %}
{% include prop-value.html label="repeatDelay" content="animation-repeat-delay.md" %}
{% include prop-value.html label="yoyo" content="animation-yoyo.md" %}
{% include prop-value.html label="stagger" content="animation-stagger.md" %}

### Formats
{% include prop-format.html label="object" content="animation-object.md" %}
{% include prop-format.html label="number" content="animation-number.md" %}
{% include prop-format.html label="boolean" content="animation-boolean.md" %}
{% include prop-format.html label="array" content="animation-array.md" %}
{% include prop-format.html label="string" content="animation-string.md" %}

### Example
_undocumented_


<hr class="t60 b60">

## Anchor
The <code>anchor</code> property defines the [alignment](/docs/concepts/#alignment) of an [item](/docs/models/#items). Anchor values are a percentage of the item’s _natural dimensions_, the actual width and height. For example, the natural dimensions of a text item are affected by the [border](#){:data-toc="border"}, the [font](#){:data-toc="font"}, line wrapping due to the [text width](#){:data-toc="text-width"} property, and so forth.

### Values
{% include prop-value.html label="x" content="anchor-x.md" %}
{% include prop-value.html label="y" content="anchor-y.md" %}

### Formats
{% include prop-format.html label="object" content="anchor-object.md" %}
{% include prop-format.html label="number" content="anchor-number.md" %}
{% include prop-format.html label="string" content="anchor-string.md" %}
{% include prop-format.html label="boolean" content="anchor-boolean.md" %}
{% include prop-format.html label="array" content="anchor-array.md" %}

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
