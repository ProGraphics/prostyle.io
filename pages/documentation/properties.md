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
Each property is composed of one or more values.  For instance, the [font](#){:data-toc="font"} property has both _size_ and _family_ values.  A [position](#){:data-toc="position"} has _x_, _y_ and _z_ dimensions. ProStyle allows you to set and animate individual property values separately or together.  This enables you to create simple animations easily, yet provides the flexibility to craft complex ones.

### Formats
Since you might only need to change a subset of a property’s values, there are different formats which make it easier to change particular values.  The available formats for a property depends upon the set of values and the nature of the property. For instance, each of the following is a valid representation of a _position_.

<div class="row b20">
	<div class="large-6 columns">
		{% highlight javascript %}position: {x:10, y:-20, z:30}{% endhighlight %}
	</div>
	<div class="large-6 columns">
		{% highlight javascript %}position: [10, -20, 30]{% endhighlight %}
	</div>
	<div class="large-6 columns">
		{% highlight javascript %}position: "10,-20,30"{% endhighlight %}
	</div>
	<div class="large-6 columns">
		{% highlight javascript %}position: {x:-10, y:-20}{% endhighlight %}
	</div>
		<div class="large-6 columns">
		{% highlight javascript %}position: [10, -20]{% endhighlight %}
	</div>
	<div class="large-6 columns">
		{% highlight javascript %}position: "10,-20"{% endhighlight %}
	</div>
	<div class="large-6 columns">
		{% highlight javascript %}position: 10{% endhighlight %}
	</div>
	<div class="large-6 columns">
		{% highlight javascript %}position: false{% endhighlight %}
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
{% highlight javascript %}{
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
}{% endhighlight %}

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
The <code>background</code> property configures the look of the rectangular background.

### Values
{% include prop-value.html label="color" content="background-color.md" %}
{% include prop-value.html label="image" content="background-image.md" %}
{% include prop-value.html label="repeat" content="background-repeat.md" %}
{% include prop-value.html label="position" content="background-position.md" %}
{% include prop-value.html label="size" content="background-size.md" %}

### Formats
{% include prop-format.html label="object" content="background-object.md" %}
{% include prop-format.html label="number" content="background-number.md" %}
{% include prop-format.html label="string" content="background-string.md" %}
{% include prop-format.html label="boolean" content="background-boolean.md" %}
{% include prop-format.html label="array" content="background-array.md" %}

### Example
_undocumented_


<hr class="t60 b60">

## Border
The <code>border</code> property draws a line around the outer edge. The [corners](#){:data-toc="corners"} property may be used to round the corners.

### Values
{% include prop-value.html label="color" content="border-color.md" %}
{% include prop-value.html label="size" content="border-size.md" %}
{% include prop-value.html label="style" content="border-style.md" %}

### Formats
{% include prop-format.html label="object" content="border-object.md" %}
{% include prop-format.html label="number" content="border-number.md" %}
{% include prop-format.html label="boolean" content="border-boolean.md" %}
{% include prop-format.html label="array" content="border-array.md" %}
{% include prop-format.html label="string" content="border-string.md" %}

### Example
_undocumented_


<hr class="t60 b60">

## Bullets
The <code>bullets</code> property renders a graphical element on the left side of each line.

There are many styles of bullets.

### Values
{% include prop-value.html label="style" content="bullets-style.md" %}

### Formats
{% include prop-format.html label="object" content="bullets-object.md" %}
{% include prop-format.html label="string" content="bullets-string.md" %}
{% include prop-format.html label="boolean" content="bullets-boolean.md" %}
{% include prop-format.html label="number" content="bullets-number.md" %}
{% include prop-format.html label="array" content="bullets-array.md" %}

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
The <code>corners</code> property defines whether each corner is rounded or comes to a point.

Each corner radius is a _percentage_ of the height of the container the item is within. They are not a percentage of the dimensions of the item itself, by design. For example, a text item might have it’s [textWidth](#){:data-toc="text-width"} property set, which causes word wrapping.  Regardless of how many lines of text are wrapped, the corner radii will stay consistent, because the containing page dimensions do not change.

### Values
{% include prop-value.html label="topLeft" content="corners-topLeft.md" %}
{% include prop-value.html label="topRight" content="corners-topRight.md" %}
{% include prop-value.html label="bottomRight" content="corners-bottomRight.md" %}
{% include prop-value.html label="bottomLeft" content="corners-bottomLeft.md" %}

### Formats
{% include prop-format.html label="object" content="corners-object.md" %}
{% include prop-format.html label="number" content="corners-number.md" %}
{% include prop-format.html label="boolean" content="corners-boolean.md" %}
{% include prop-format.html label="array" content="corners-array.md" %}
{% include prop-format.html label="string" content="corners-string.md" %}

### Example
_undocumented_


<hr class="t60 b60">

## Crop
The <code>crop</code> property determines whether the contained content is visible outside of the container.  Cropping causes [3D](/docs/concepts/#3d) to be rendered flat.

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
The font property is used to set the typeface and line size of rendered text.

Modern web browsers generally support a standard set of font faces, commonly referred to as web safe fonts. Any of these fonts may be used.  Furthermore, any external font faces may be loaded in the HTML and used, such as those at Google Fonts.

While it is possible to animate the size and lineHeight values, it is a relatively high computational process to render text, and might result in jerky animation.  For better performance, define the font properties once and then use the scale property.

### Values
{% include prop-value.html label="family" content="font-family.md" %}
{% include prop-value.html label="size" content="font-size.md" %}
{% include prop-value.html label="lineHeight" content="font-lineHeight.md" %}

### Formats
{% include prop-format.html label="object" content="font-object.md" %}
{% include prop-format.html label="number" content="font-number.md" %}
{% include prop-format.html label="string" content="font-string.md" %}
{% include prop-format.html label="array" content="font-array.md" %}
{% include prop-format.html label="boolean" content="font-boolean.md" %}

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
The opacity property determines how transparent the target is. Hardware acceleration is used when available, so the animation is usually quite smooth.

Alias: opac

### Values
{% include prop-value.html label="percent" content="opacity-percent.md" %}

### Formats
{% include prop-format.html label="object" content="opacity-object.md" %}
{% include prop-format.html label="number" content="opacity-number.md" %}
{% include prop-format.html label="boolean" content="opacity-boolean.md" %}
{% include prop-format.html label="array" content="opacity-array.md" %}
{% include prop-format.html label="string" content="opacity-string.md" %}

### Example
_undocumented_


<hr class="t60 b60">

## Padding
The padding property defines how much extra space appears between a target’s edge and the content within. Padding can be defined on any or all of the four sides.  The top and bottom values are a percentage of the height of the container. e.g. item on a page. The left and right values are a percentage of the width of the container.


### Values
{% include prop-value.html label="left" content="padding-left.md" %}
{% include prop-value.html label="top" content="padding-top.md" %}
{% include prop-value.html label="right" content="padding-right.md" %}
{% include prop-value.html label="bottom" content="padding-bottom.md" %}

### Formats
{% include prop-format.html label="object" content="padding-object.md" %}
{% include prop-format.html label="number" content="padding-number.md" %}
{% include prop-format.html label="boolean" content="padding-boolean.md" %}
{% include prop-format.html label="array" content="padding-array.md" %}
{% include prop-format.html label="string" content="padding-string.md" %}

### Example
_undocumented_


<hr class="t60 b60">

## Position
The position property determines where a target object is located in 3D space. The X axis extends from left to right, and the Y axis extends from top to bottom. Also, an imaginary Z axis extends from behind the screen, through the screen, to in front of it.  All three axes intersect in the middle of the page.

Unlike standard web animation, Pro Motion uses center alignment. See Alignment and Origins.  The position defines where the target’s anchor is, which by default is at the center of the target’s dimensions.

Hardware acceleration is used when available, so the animation is usually quite smooth.

Alias: pos

### Values
{% include prop-value.html label="x" content="position-x.md" %}
{% include prop-value.html label="y" content="position-y.md" %}
{% include prop-value.html label="z" content="position-z.md" %}

### Formats
{% include prop-format.html label="object" content="position-object.md" %}
{% include prop-format.html label="array" content="position-array.md" %}
{% include prop-format.html label="number" content="position-number.md" %}
{% include prop-format.html label="boolean" content="position-boolean.md" %}
{% include prop-format.html label="string" content="position-string.md" %}

### Example
_undocumented_


<hr class="t60 b60">

## Rotation
The rotation property turns a target object in 3D space. There are three axes. The X axis extends horizontally, the Y axis extends vertically, and the Z axis extends from back to front. The position in which all three axes intersect is called the transform origin. By default, it is located in the center of the target object, but can be adjusted with the transformOrigin property. See Alignment and Origins.

Standard two dimensional rotation is the equivalent of rotating around the z axis in 3D. Picture an axis line poking perpendicularly through the center of an image, and then the image rotating around that z axis. With Pro Motion, you can rotate around all three axes independently. Some visually attractive effects can be achieved by rotating along all three axes, but in different scripts, at different speeds.

Values are always absolute angles, in degrees.  They are not added to any existing values. The property is therefore named rotation, not rotate, since the latter might incorrectly hint that it is relative. Nevertheless, rotate can be used as an alias, but the values are always absolute.

When animating, Pro Motion will tween from the current rotation to the new one.  For example, an object rotated 360 degrees will look the same as if it were rotated 0 degrees. However, when animating, it will rotate around one revolution.  To turn it two times, counterclockwise, you could set the rotation to -720.

Hardware acceleration is used when available, so the animation is usually quite smooth.

Aliases: rot, rotate


### Values
{% include prop-value.html label="x" content="rotation-x.md" %}
{% include prop-value.html label="y" content="rotation-y.md" %}
{% include prop-value.html label="z" content="rotation-z.md" %}

### Formats
{% include prop-format.html label="object" content="rotation-object.md" %}
{% include prop-format.html label="array" content="rotation-array.md" %}
{% include prop-format.html label="number" content="rotation-number.md" %}
{% include prop-format.html label="boolean" content="rotation-boolean.md" %}
{% include prop-format.html label="string" content="rotation-string.md" %}

### Example
_undocumented_


<hr class="t60 b60">

## Scale
The scale property stretches the target in x and y directions.   Hardware acceleration is used when available, so the animation is usually quite smooth.  However, the target will look increasingly pixelated with larger scale values.

The actual width and height of a target is referred to as it’s natural dimensions. The way the size is determined is specific to the type of the target. For instance, the text item uses a font property, which has values that determine the height of each text line. The textWidth property might induce line wrapping.  Those properties and others, such as border and padding, contribute to the natural dimensions of the item.


### Values
{% include prop-value.html label="x" content="scale-x.md" %}
{% include prop-value.html label="y" content="scale-y.md" %}

### Formats
{% include prop-format.html label="object" content="scale-object.md" %}
{% include prop-format.html label="number" content="scale-number.md" %}
{% include prop-format.html label="boolean" content="scale-boolean.md" %}
{% include prop-format.html label="array" content="scale-array.md" %}
{% include prop-format.html label="string" content="scale-string.md" %}

### Example
_undocumented_


<hr class="t60 b60">

## Shadow
The shadow property adds one or more shadows to the surrounding box. Shadows may be standard drop shadows, outside the box.  They may also be inset, inside the surrounding box, which appear like a cutout hole.

The shadow gives the appearance of depth. However, it is rendered on the same two dimensional plane as the target.  If you rotate the target, for instance, the shadow rotates with it.  See 3D.

alias: shadows

### Values
{% include prop-value.html label="x" content="shadow-x.md" %}
{% include prop-value.html label="y" content="shadow-y.md" %}
{% include prop-value.html label="blur" content="shadow-blur.md" %}
{% include prop-value.html label="color" content="shadow-color.md" %}
{% include prop-value.html label="spread" content="shadow-spread.md" %}
{% include prop-value.html label="inset" content="shadow-inset.md" %}

### Formats
{% include prop-format.html label="object" content="shadow-object.md" %}
{% include prop-format.html label="boolean" content="shadow-boolean.md" %}
{% include prop-format.html label="number" content="shadow-number.md" %}
{% include prop-format.html label="array" content="shadow-array.md" %}
{% include prop-format.html label="string" content="shadow-string.md" %}

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
The skew property applies a left or right slant to the target. Hardware acceleration is used when available, so the animation is usually quite smooth.

Pro Motion only supports skewing in the horizontal direction, but vertical skewing can be emulated by skewing horizontally and also rotating.


### Values
{% include prop-value.html label="degrees" content="skew-degrees.md" %}

### Formats
{% include prop-format.html label="object" content="skew-object.md" %}
{% include prop-format.html label="number" content="skew-number.md" %}
{% include prop-format.html label="boolean" content="skew-boolean.md" %}
{% include prop-format.html label="array" content="skew-array.md" %}
{% include prop-format.html label="string" content="skew-string.md" %}

### Example
_undocumented_


<hr class="t60 b60">

## Text Align
The textAlign property positions the contents of rendered lines of text, relative to each other.

alias: align

### Values
{% include prop-value.html label="align" content="textAlign-align.md" %}

### Formats
{% include prop-format.html label="object" content="textAlign-object.md" %}
{% include prop-format.html label="string" content="textAlign-string.md" %}
{% include prop-format.html label="boolean" content="textAlign-boolean.md" %}
{% include prop-format.html label="number" content="textAlign-number.md" %}
{% include prop-format.html label="array" content="textAlign-array.md" %}

### Example
_undocumented_


<hr class="t60 b60">

## Text Color
The textColor property defines the color of text.

alias: color

### Values
{% include prop-value.html label="color" content="textColor-color.md" %}

### Formats
{% include prop-format.html label="object" content="textColor-object.md" %}
{% include prop-format.html label="string" content="textColor-string.md" %}
{% include prop-format.html label="number" content="textColor-number.md" %}
{% include prop-format.html label="boolean" content="textColor-boolean.md" %}
{% include prop-format.html label="array" content="textColor-array.md" %}


### Example
_undocumented_


<hr class="t60 b60">

## Text Shadow
The textShadow property adds one or more shadows to the text itself. Text shadows are very similar to box shadows, however the spread and inset values are not supported.

The shadow gives the appearance of depth. However, it is rendered on the same two dimensional plane as the text.  If you rotate the text, for instance, the shadow rotates with it.  See 3D.

alias: textShadows

### Values
{% include prop-value.html label="x" content="textShadow-x.md" %}
{% include prop-value.html label="y" content="textShadow-y.md" %}
{% include prop-value.html label="blur" content="textShadow-blur.md" %}
{% include prop-value.html label="color" content="textShadow-color.md" %}

### Formats
{% include prop-format.html label="object" content="textShadow-object.md" %}
{% include prop-format.html label="boolean" content="textShadow-boolean.md" %}
{% include prop-format.html label="number" content="textShadow-number.md" %}
{% include prop-format.html label="array" content="textShadow-array.md" %}
{% include prop-format.html label="string" content="textShadow-string.md" %}

### Example
_undocumented_


<hr class="t60 b60">

## Text Style
The textStyle property defines how to visually augment the text to call attention to it.

aliases:  textStyles, styles, style

### Values
{% include prop-value.html label="bold" content="textStyle-bold.md" %}
{% include prop-value.html label="italic" content="textStyle-italic.md" %}
{% include prop-value.html label="line" content="textStyle-line.md" %}
{% include prop-value.html label="smallCaps" content="textStyle-smallCaps.md" %}

### Formats
{% include prop-format.html label="object" content="textStyle-object.md" %}
{% include prop-format.html label="string" content="textStyle-string.md" %}
{% include prop-format.html label="boolean" content="textStyle-boolean.md" %}
{% include prop-format.html label="number" content="textStyle-number.md" %}
{% include prop-format.html label="array" content="textStyle-array.md" %}

### Example
_undocumented_


<hr class="t60 b60">

## Text Width
The textWidth property defines the maximum width of a text item. The natural width of a line of text depends on the font values and the set of characters.  If a text width is defined that is shorter than the natural width, those that don’t fit will wrap to the next line.

aliases: width

### Values
{% include prop-value.html label="width" content="textWidth-width.md" %}

### Formats
{% include prop-format.html label="object" content="textWidth-object.md" %}
{% include prop-format.html label="number" content="textWidth-number.md" %}
{% include prop-format.html label="boolean" content="textWidth-boolean.md" %}
{% include prop-format.html label="string" content="textWidth-string.md" %}
{% include prop-format.html label="array" content="textWidth-array.md" %}

### Example
_undocumented_


<hr class="t60 b60">

## Transform Origin
The transformOrigin property defines the reference point when transforming a target object. By default, the origin is centered on the target, at [0,0,0]. You might change it to rotate the target around a different point, in 3D space.

Like the anchor property, the values are a percentage of the target’s dimensions. However, transformOrigin and anchor serve two very distinct purposes. See Alignment and Origins.

Alias: origin

### Values
{% include prop-value.html label="x" content="transformOrigin-x.md" %}
{% include prop-value.html label="y" content="transformOrigin-y.md" %}
{% include prop-value.html label="z" content="transformOrigin-z.md" %}

### Formats
{% include prop-format.html label="array" content="transformOrigin-array.md" %}

### Example
_undocumented_
