---
layout: page-doc
title: "Properties"
permalink: "/properties/"
---
## Overview
{: class='t0'}
A property defines _appearance_ or [placement](/concepts/#placement) of a [model](/models/) object.  Property values are initialized with an <code>init</code> entry and may be [scripted](/concepts/#animation) to change over time. e.g. [Rotation](#){:data-toc="rotation"}. There are also [pseudo properties](#){:data-toc="pseudo-properties"}, which are similar to regular properties but instruct _how_ to alter properties.

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
Most properties alter the appearance or placement of something.  However, there are a few special cases that are a bit different.  They are grouped together with regular properties because they are configured in the same manner, with <code>init</code> blocks and/or [script](/concepts/#animation) actions.

* [Animation](#){:data-toc="animation"}
* [Class](#){:data-toc="class"}
* [Delay](#){:data-toc="delay"}
* [Move To](#){:data-toc="move-to"}


<hr class="t60 b60">

## Animation
The <code>animation</code> property defines the characteristics of an [animation](/concepts/#animation), such as how long it will take, or how many times it will repeat.

* _alias:_ <code>anim</code>

### Values
{% include prop-value.html label="duration" content="animation-duration.md" %}
{% include prop-value.html label="ease" content="animation-ease.md" %}
{% include prop-value.html label="repeat" content="animation-repeat.md" %}
{% include prop-value.html label="stagger" content="animation-stagger.md" %}

### Formats
{% include prop-format.html label="object" content="animation-object.md" %}
{% include prop-format.html label="number" content="animation-number.md" %}
{% include prop-format.html label="boolean" content="animation-boolean.md" %}
{% include prop-format.html label="array" content="animation-array.md" %}
{% include prop-format.html label="string" content="animation-string.md" %}

### Example
{% include alert story="/examples/scale/" %}
{% highlight javascript %}{
  item:  {
    text:"scale",
    init: {color:"#234", font:70},
    actions: [
      {anim:2, scale:30},
      {anim:2, scale:false}
    ]
  }
}
{% endhighlight %}


<hr class="t60 b60">

## Anchor
The <code>anchor</code> property defines the [alignment](/concepts/#alignment) of an [item](/models/#items). Anchor values are a percentage of the item’s _natural dimensions_, the actual width and height. For example, the natural dimensions of a text item are affected by the [border](#){:data-toc="border"}, the [font](#){:data-toc="font"}, line wrapping due to the [text width](#){:data-toc="text-width"} property, and so forth.

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
{% include alert story="/examples/item-alignment/" %}
{% highlight javascript %}{
  classes: { 
    layer: {border: [3,"#234"], corners: true},
    l: { anim:2, anchor:[-50,0], pos:-35 },
    r: { anim:3, anchor:[50,0], pos:35 },
    c: { anim:2, anchor:false, pos:0 }
  },
  items:  [
    {
      itemType: "layer",
      init: {size: [20,20], pos:[0,-30]},
      actions: [{class:"l"}, {class:"r"},{class:"c"}]
    },
    {
      itemType: "layer",
      init: {size: [30,20]},
      actions: [{class:"l"}, {class:"r"},{class:"c"}]
    },
    {
      itemType: "layer",
      init: {size: [40,20], pos:[0,30]},
      actions: [{class:"l"}, {class:"r"},{class:"c"}]
    }
  ]
}
{% endhighlight %}


<hr class="t60 b60">

## Background
The <code>background</code> property configures the look of the rectangular background of the [canvas](/models/#canvas), [frame](/models/#frame), [pages](/models/#pages) or [items](/models/#items).

* _alias:_ <code>bg</code>

### Values
{% include prop-value.html label="color" content="background-color.md" %}
{% include prop-value.html label="image" content="background-image.md" %}
{% include prop-value.html label="aspectRatio" content="background-aspectRatio.md" %}
{% include prop-value.html label="layout" content="background-layout.md" %}
{% include prop-value.html label="x" label2="y" content="background-position.md" %}
{% include prop-value.html label="width" label2="height" content="background-size.md" %}
{% include prop-value.html label="repeat" content="background-repeat.md" %}
{% include prop-value.html label="clip" content="background-clip.md" %}

### Formats
{% include prop-format.html label="object" content="background-object.md" %}
{% include prop-format.html label="string" content="background-string.md" %}
{% include prop-format.html label="array" content="background-array.md" %}
{% include prop-format.html label="number" content="background-number.md" %}
{% include prop-format.html label="boolean" content="background-boolean.md" %}

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
{% include alert story="/examples/border/" %}
{% highlight javascript %}
{
  item: {
    text:"border",
    init: { padding:5, corners:10, font:50, color:"#234"},
    actions:[
      { delay:1, border:{size:1,color:"#AAA",style:"dashed"}},
      { delay:1, border:{size:2,color:"#666",style:"dotted"}},
      { delay:1, border:{size:3,color:"#234",style:"solid"}},
      { delay:1, border:false}
    ]
  }
}
{% endhighlight %}

<hr class="t60 b60">

## Bullets
The <code>bullets</code> property renders a graphical element on the left side of each line.

There are many styles of bullets.

{% highlight javascript %}"none"
"arabic-indic"
"armenian"
"bengali"
"cambodian"
"circle"
"cjk-ideographic"
"decimal"
"decimal-leading-zero"
"devanagari"
"disc"
"georgian"
"gujarati"
"gurmukhi"
"hebrew"
"hiragana"
"hiragana-iroha"
"kannada"
"katakana"
"katakana-iroha"
"khmer"
"lao"
"lower-alpha"
"lower-armenian"
"lower-greek"
"lower-latin"
"lower-roman"
"malayalam"
"mongolian"
"myanmar"
"oriya"
"persian"
"telugu"
"thai"
"tibetan"
"square"
"upper-alpha"
"upper-latin"
"upper-roman"
{% endhighlight %}
### Values
{% include prop-value.html label="style" content="bullets-style.md" %}

### Formats
{% include prop-format.html label="object" content="bullets-object.md" %}
{% include prop-format.html label="string" content="bullets-string.md" %}
{% include prop-format.html label="boolean" content="bullets-boolean.md" %}
{% include prop-format.html label="number" content="bullets-number.md" %}
{% include prop-format.html label="array" content="bullets-array.md" %}

### Example
{% include alert story="/examples/bullets/" %}
{% highlight javascript %}
{
  item: {
    text: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor",
      "Incididunt ut labore",
      "Et dolore magna aliqua"
    ],
    linesInit: { bullets:"disc", color:"#234"},
    lineActions:[
      {
        anim:{dur:1, stagger:0.2},
        bullets:"circle"
      },
      {
        anim:{dur:1, stagger:0.2},
        bullets:false
      },
      {
        anim:{dur:1, stagger:0.2},
        bullets:"disc"
      }
    ]
  }
}
{% endhighlight %}


<hr class="t60 b60">

## Class
Use a _class_ to define property values once and reuse them in multiple places. Classes may be used in <code>init</code> blocks and in [script actions](/concepts/#animation).

The property values defined in a classes do not necessarily need to be aligned to a particular [model object](/models/) or [property set](/models/#property-sets). A class may define any arbitrary set of properties. It might contain only a subset of a model object’s properties, or might contain properties for multiple model objects. A model object will use the properties it understands and simply ignore the rest.

Each model object has a default class name. For example, if you define a class named <code>text</code> then all text items will pick up those values without needing to associate the class with each item. However, you can create classes with other names and then explicitly associate them using the _class_ property.

### Formats
{% include prop-format.html label="string" content="class-string.md" %}

### Example
{% include alert story="/examples/property-class/" %}
{% highlight javascript %}
{
  classes: {
    label: { 
      border: "blue",
      corners:10,
      font:15,
      color:"blue",
      padding: 3
    }
  },
  items: [
    {
      text:"One",
      init: { class:"label", pos:[0,-15] }
    },
    {
      text:"Two",
      init: { class:"label", pos:[0,15] }
    }
  ]
}
{% endhighlight %}


<hr class="t60 b60">

## Corners
The <code>corners</code> property defines whether each corner is rounded or comes to a point.

Each corner radius is a _percentage_ of the height of the container the item is within. They are not a percentage of the dimensions of the item itself, by design. For example, a text item might have its [textWidth](#){:data-toc="text-width"} property set, which causes word wrapping.  Regardless of how many lines of text are wrapped, the corner radii will stay consistent, because the containing page dimensions do not change.

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
{% include alert story="/examples/corners/" %}
{% highlight javascript %}{
  item: {
    text:"corners",
    init: {
      padding:5,
      border:[1, "#234"],
      font:40,
      color:"#234"
    },
    actions:[
      { anim:2, corners:15},
      { anim:2, corners:[40,10,30,5]},
      { anim:2, corners:{bottomRight:5}},
      { anim:2, corners:[10,40]},
      { anim:2, corners:false}
    ]
  }
}
{% endhighlight %}

<hr class="t60 b60">

## Crop
The <code>crop</code> property determines whether a container's content is visible outside of its boundaries. For instance, if a layer contains a text item, and the text item is positioned partly beyond the layer's bounds, should it appear cut off or display normally?

Cropping may cause [3D](/concepts/#3d) rendering to appear flat, per the [CSS Transforms Specification](https://drafts.csswg.org/css-transforms/#3d-rendering-contexts) as implemented by the browser.

### Values
{% include prop-value.html label="crop" content="crop-crop.md" %}

### Formats
{% include prop-format.html label="object" content="crop-object.md" %}
{% include prop-format.html label="boolean" content="crop-boolean.md" %}

### Example
{% include alert story="/examples/crop-toggling/" %}
{% highlight javascript %}{
  classes: { 
  },
	items:[
	  {
	    itemType: "layer",
	    init: { bg: "#F7F7F7", size:[100,25] },
	    actions:[
	      { delay:3, crop:true }
	    ],
	    item: {
  			text:"ProStyle",
  			init: { color:"#234", font:25 },
  			action: { anim:[6, "linear"], rot:720 }
  		}
	  }
	]
}
{% endhighlight %}


<hr class="t60 b60">

## Data
The _data_ property is used to pass one or more arrays of data.  The structure of the data and how it will be used are specific to the [model](/models/) object that consumes it. 

### Values
{% include prop-value.html label="values" content="data-values.md" %}

### Formats
{% include prop-format.html label="object" content="data-object.md" %}
{% include prop-format.html label="array" content="data-array.md" %}
{% include prop-format.html label="boolean" content="data-boolean.md" %}

### Example
{% include alert story="/gallery/simple-bar-chart/" %}
{% highlight javascript %}{
	item: {
		itemType: "barChart",
		setup: { bars:7, domain:7, margin:7 },
		barsInit: { fill:"#567" },
		barActions: [
			{ anim:3, data:[1,2,3,4,5,6,7]	},
			{ anim:1, data:false }
		]
	}
}
{% endhighlight %}


<hr class="t60 b60">

## Delay
The _delay_ property inserts a pause into an action before the action begins. It is not valid for <code>init</code> entries. If the action performs an [animation](#){:data-toc="animation"} the delay is performed first and then the animation begins.  The duration of an action is the sum of its delay and its animation.

### Formats
{% include prop-format.html label="number" content="delay-number.md" %}

### Example
{% include alert story="/examples/text-style/" %}
{% highlight javascript %}{
  item: {
    text: "Style",
    actions:[
      {delay:1, style:"bold"},
      {delay:1, style:"italic"},
      {delay:1, style:"under"}
    ]
  }
}
{% endhighlight %}


<hr class="t60 b60">

## Fill
The _fill_ property defines the color used to fill part of an item that is created with scalable vector graphics.


### Values
{% include prop-value.html label="color" content="fill-color.md" %}

### Formats
{% include prop-format.html label="object" content="fill-object.md" %}
{% include prop-format.html label="string" content="fill-string.md" %}
{% include prop-format.html label="number" content="fill-number.md" %}
{% include prop-format.html label="boolean" content="fill-boolean.md" %}
{% include prop-format.html label="array" content="fill-array.md" %}


### Example
{% include alert story="/gallery/simple-bar-chart/" %}
{% highlight javascript %}{
	item: {
		itemType: "barChart",
		setup: { bars:7, domain:7, margin:7 },
		barsInit: { fill:"#567" },
		barActions: [
			{ anim:3, data:[1,2,3,4,5,6,7]	},
			{ anim:1, data:false }
		]
	}
}
{% endhighlight %}


<hr class="t60 b60">
  

## Font
The font property is used to set the typeface and line size of rendered text.

Modern web browsers generally support a standard set of font faces, commonly referred to as web safe fonts. Any of these fonts may be used.  Furthermore, any external font faces may be loaded in the HTML and used, such as those at Google Fonts.

While it is possible to animate the size and lineHeight values, it is a relatively high computational process to render text, and might result in jerky animation.  For better performance, define the font properties once and then use the scale property.

### Values
{% include prop-value.html label="size" content="font-size.md" %}
{% include prop-value.html label="family" content="font-family.md" %}
{% include prop-value.html label="lineHeight" content="font-lineHeight.md" %}

### Formats
{% include prop-format.html label="object" content="font-object.md" %}
{% include prop-format.html label="number" content="font-number.md" %}
{% include prop-format.html label="string" content="font-string.md" %}
{% include prop-format.html label="array" content="font-array.md" %}
{% include prop-format.html label="boolean" content="font-boolean.md" %}

### Example
{% include alert story="/examples/font/" %}
{% highlight javascript %}
{
  item:  {
    text:"font",
    init: {
      pos:[-50,-50], anchor:[-50,-50],
      origin:[-50,-50], color:"#234",
      font:30, scale:100
    },
    action: {
      anim:{ dur:5, rep:1, yoyo:true },
      scale:1000
    }
  }
}
{% endhighlight %}

{% include alert story="/examples/font-2/" %}
{% highlight javascript %}
{
  item:  {
    text:"font",
    init: {
      pos:[-50,-50], anchor:[-50,-50],
      origin:[-50,-50], color:"#234",
      font:30, scale:100
    },
    action: {
      anim:{ dur:5, rep:1, yoyo:true },
      scale:1000
    }
  }
}
{% endhighlight %}


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

* _alias:_ <code>opac</code>

### Values
{% include prop-value.html label="percent" content="opacity-percent.md" %}

### Formats
{% include prop-format.html label="object" content="opacity-object.md" %}
{% include prop-format.html label="number" content="opacity-number.md" %}
{% include prop-format.html label="boolean" content="opacity-boolean.md" %}
{% include prop-format.html label="array" content="opacity-array.md" %}
{% include prop-format.html label="string" content="opacity-string.md" %}

### Example
{% include alert story="/examples/opacity/" %}
{% highlight javascript %}{
  items:[
    {
      text:"UNDER",
      init: {color:"#234",style:"bold",font:45}
    },
    {
      text:"OVER",
      init: {color:"orange",style:"bold",font:55},
      actions:[
        {delay:1, anim:2, opacity:0},
        {anim:2, opacity:false}
      ]
    }
  ]
}

{% endhighlight %}


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
{% include alert story="/examples/padding/" %}
{% highlight javascript %}{
  item: {
    text:"padding",
    init: {
      border:[2,"#234"],
      font:30,
      color:"#234"
    },
    actions:[
      { anim:2, padding:5},
      { anim:2, padding:[0,0,20,0]},
      { anim:2, padding:{right:10}},
      { anim:2, padding:[20,10]},
      { anim:2, padding:false}
    ]
  }
}

{% endhighlight %}

<hr class="t60 b60">

## Position
The position property determines where a target object is located in 3D space. The X axis extends from left to right, and the Y axis extends from top to bottom. Also, an imaginary Z axis extends from behind the screen, through the screen, to in front of it.  All three axes intersect in the middle of the page.

Unlike standard web animation, ProStyle uses center alignment. See Alignment and Origins.  The position defines where the target’s anchor is, which by default is at the center of the target’s dimensions.

Hardware acceleration is used when available, so the animation is usually quite smooth.

* _alias:_ <code>pos</code>

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
{% include alert story="/examples/position/" %}
{% highlight javascript %}{
  item:  {
    text:"pos",
    init: {
      color:"#234",
      font:25,
      pos:[-20,-20,20]
    },
    actions: [
      {anim:1, pos:{z:-20}},
      {anim:1, pos:{x:20}},
      {anim:1, pos:{z:20}},
      {anim:1, pos:{y:20}},
      {anim:1, pos:{z:-20}},
      {anim:1, pos:{x:-20}},
      {anim:1, pos:{z:20}},
      {anim:1, pos:{y:-20}}
    ]
  }
}

{% endhighlight %}


<hr class="t60 b60">

## Rotation
The rotation property turns a target object in 3D space. There are three axes. The X axis extends horizontally, the Y axis extends vertically, and the Z axis extends from back to front. The position in which all three axes intersect is called the transform origin. By default, it is located in the center of the target object, but can be adjusted with the transformOrigin property. See Alignment and Origins.

Standard two dimensional rotation is the equivalent of rotating around the z axis in 3D. Picture an axis line poking perpendicularly through the center of an image, and then the image rotating around that z axis. With ProStyle, you can rotate around all three axes independently. Some visually attractive effects can be achieved by rotating along all three axes, but in different scripts, at different speeds.

Values are always absolute angles, in degrees.  They are not added to any existing values. The property is therefore named rotation, not rotate, since the latter might incorrectly hint that it is relative. Nevertheless, rotate can be used as an alias, but the values are always absolute.

When animating, ProStyle will tween from the current rotation to the new one.  For example, an object rotated 360 degrees will look the same as if it were rotated 0 degrees. However, when animating, it will rotate around one revolution.  To turn it two times, counterclockwise, you could set the rotation to -720.

Hardware acceleration is used when available, so the animation is usually quite smooth.

* _alias:_ <code>rot</code>
* _alias:_ <code>rotate</code>


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
{% include alert story="/examples/rotation/" %}
{% highlight javascript %}{
  classes: { text:{color:"#234", font:20}},
  frame: { aspectRatio:0.8},
  items: [
    {
      text:"x axis",
      init:{class:"text", pos:{y:-35}},
      action:{anim:[3,"linear"], rot:{x:360}}
    },
    {
      text:"z axis",
      init:{class:"text", pos:{y:-5}},
      action:{anim:[3,"linear"], rot:360}
    },
    {
      text:"y axis",
      init:{class:"text", pos:{y:25}},
      action:{anim:[3,"linear"], rot:{y:360}}
    }
  ]
}

{% endhighlight %}


<hr class="t60 b60">

## Scale
The scale property stretches the target in x and y directions.   Hardware acceleration is used when available, so the animation is usually quite smooth.  However, the target will look increasingly pixelated with larger scale values.

The actual width and height of a target is referred to as its natural dimensions. The way the size is determined is specific to the type of the target. For instance, the text item uses a font property, which has values that determine the height of each text line. The textWidth property might induce line wrapping.  Those properties and others, such as border and padding, contribute to the natural dimensions of the item.


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
{% include alert story="/examples/scale/" %}
{% highlight javascript %}{
  item:  {
    text:"scale",
    init: {color:"#234", font:70},
    actions: [
      {anim:2, scale:30},
      {anim:2, scale:false}
    ]
  }
}
{% endhighlight %}


<hr class="t60 b60">

## Shadow
The shadow property adds one or more shadows to the surrounding box. Shadows may be standard drop shadows, outside the box.  They may also be inset, inside the surrounding box, which appear like a cutout hole.

The shadow gives the appearance of depth. However, it is rendered on the same two dimensional plane as the target.  If you rotate the target, for instance, the shadow rotates with it.  See 3D.

* _alias:_ <code>shadows</code>

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
{% include alert story="/examples/shadow/" %}
{% highlight javascript %}{
  item:{
    text:"Shadow",
    init: {
      color:"#FFF",
      bg:"#234",
      font:35,
      padding:true,
      corners:true,
      shadow:[2,2,5,"black",0]
    },
    actions:[
      { anim:1,
        pos:[-3,-3],
        scale:105,
        shadow:[5,5,7,"rgba(0,0,0,0.8)",-1]
      },
      { anim:1,
        pos:false,
        scale:false,
        shadow:[2,2,5,"black",0]
      }
    ]
  }
}

{% endhighlight %}


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

ProStyle only supports skewing in the horizontal direction, but vertical skewing can be emulated by skewing horizontally and also rotating.


### Values
{% include prop-value.html label="degrees" content="skew-degrees.md" %}

### Formats
{% include prop-format.html label="object" content="skew-object.md" %}
{% include prop-format.html label="number" content="skew-number.md" %}
{% include prop-format.html label="boolean" content="skew-boolean.md" %}
{% include prop-format.html label="array" content="skew-array.md" %}
{% include prop-format.html label="string" content="skew-string.md" %}

### Example
{% include alert story="/examples/skew/" %}
{% highlight javascript %}{
  item: {
    text:"skew x",
    init: {
      color:"#234",
      font:55,
      skew:-20
    },
    action:{
      anim:[3,"less curve inout",1,0,true],
      skew:20
    }
  }
}

{% endhighlight %}
{% include alert story="/examples/skew-2/" %}
{% highlight javascript %}{
  item: {
      text:"skew y",
      init: {
        color:"#234",
        font:55,
        skew:-20,
        rot:-15
      },
      action: {
        anim:[3,"less curve inout",1,0,true],
        skew:20,
        rot:15
      }
    }
}

{% endhighlight %}


<hr class="t60 b60">

## Text Align
The textAlign property positions the contents of rendered lines of text, relative to each other.

* _alias:_ <code>align</code>

### Values
{% include prop-value.html label="align" content="textAlign-align.md" %}

### Formats
{% include prop-format.html label="object" content="textAlign-object.md" %}
{% include prop-format.html label="string" content="textAlign-string.md" %}
{% include prop-format.html label="boolean" content="textAlign-boolean.md" %}
{% include prop-format.html label="number" content="textAlign-number.md" %}
{% include prop-format.html label="array" content="textAlign-array.md" %}

### Example
{% include alert story="/examples/text-align/" %}
{% highlight javascript %}{
  item: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    init: {
      color:"#234",
      textWidth:90,
      font:7
    },
    actions:[
      {delay:1, align:"c"},
      {delay:1, align:"r"},
      {delay:1, align:"j"},
      {delay:1, align:"l"},
    ]
  }
}

{% endhighlight %}


<hr class="t60 b60">

## Text Color
The textColor property defines the color of text.

* _alias:_ <code>color</code>

### Values
{% include prop-value.html label="color" content="textColor-color.md" %}

### Formats
{% include prop-format.html label="object" content="textColor-object.md" %}
{% include prop-format.html label="string" content="textColor-string.md" %}
{% include prop-format.html label="number" content="textColor-number.md" %}
{% include prop-format.html label="boolean" content="textColor-boolean.md" %}
{% include prop-format.html label="array" content="textColor-array.md" %}


### Example
{% include alert story="/examples/color-cycling/" %}
{% highlight javascript %}{
  item: {
    text: "COLOR",
    init: {color:"red", font:40, style:"bold"},
    actions:[
      {anim:3, color:"#234"},
      {anim:3, color:"rgba(127,127,15,0.8)"},
      {anim:3, color:"red"}
    ]
  }
}

{% endhighlight %}


<hr class="t60 b60">

## Text Shadow
The textShadow property adds one or more shadows to the text itself. Text shadows are very similar to box shadows, however the spread and inset values are not supported.

The shadow gives the appearance of depth. However, it is rendered on the same two dimensional plane as the text.  If you rotate the text, for instance, the shadow rotates with it.  See 3D.

* _alias:_ <code>textShadows</code>

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
{% include alert story="/examples/text-shadow/" %}
{% highlight javascript %}{
  item:{
    text:"TEXT",
    init: {
      color:"#FFF",
      font:60,
      textShadow:[0,0,3,"#234"]
    },
    charAction: {
      anim:[1,"less curve inout",1,0,true,0.2],
      textShadow:[0,0,10,"#234"],
      scale:103
    }
  }
}

{% endhighlight %}


<hr class="t60 b60">

## Text Style
The <code>textStyle</code> property defines how text is visually augmented. This is generally done to call attention to it.

* _alias:_ <code>textStyles</code>
* _alias:_ <code>styles</code>
* _alias:_ <code>style</code>

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
{% include alert story="/examples/text-style/" %}
{% highlight javascript %}{
  item: {
    text: "Style",
    init: {font:40},
    actions:[
      {delay:1, style:"bold"},
      {delay:1, style:"italic"},
      {delay:1, style:"under"},
      {delay:1, style:"through"},
      {delay:1, style:"over"},
      {delay:1, style:"caps"},
      {delay:1, style:false}
    ]
  }
}

{% endhighlight %}


<hr class="t60 b60">

## Text Width
The <code>textWidth</code> property defines the maximum width of a text item. The _natural_ width of text depends on the [font](#){:data-toc="font"} values and the set of characters.  If a text width is defined that is shorter than the natural width, that which don’t fit will wrap to the next line.

* _alias:_ <code>width</code>

### Values
{% include prop-value.html label="width" content="textWidth-width.md" %}

### Formats
{% include prop-format.html label="object" content="textWidth-object.md" %}
{% include prop-format.html label="number" content="textWidth-number.md" %}
{% include prop-format.html label="boolean" content="textWidth-boolean.md" %}
{% include prop-format.html label="string" content="textWidth-string.md" %}
{% include prop-format.html label="array" content="textWidth-array.md" %}

### Example
{% include alert story="/examples/word-wrapping/" %}
{% highlight javascript %}{
  item: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    init: {
      border:0.1,
      padding:5,
      font:5,
      width:100,
      pos:[-50,-50],
      anchor:[-50,-50]
    },
    action: {
      anim:{ dur:4, rep:1, yoyo:true }, 
      width:60
    }
  }
}
{% endhighlight %}


<hr class="t60 b60">

## Transform Origin
The <code>transformOrigin</code> property defines the reference point when transforming a target object. By default, the origin is centered on the item, with the values <samp class="number">[0,0,0]</samp>. Like this, an item will rotate around its center. Values of <samp class="number">[-50,-50]</samp> represent the item's top-left corner.  Optionally, the <code>expand</code> value may be set to use an origin relative to the _item's container_.

Like the [anchor](#){:data-toc="anchor"} property, the values are a percentage of the target’s dimensions. However, transformOrigin and anchor serve two very distinct purposes. See [Alignment](/concepts/#alignment).

* _alias:_ <code>origin</code>

### Values
{% include prop-value.html label="x" content="transformOrigin-x.md" %}
{% include prop-value.html label="y" content="transformOrigin-y.md" %}
{% include prop-value.html label="z" content="transformOrigin-z.md" %}
{% include prop-value.html label="expand" content="transformOrigin-expand.md" %}

### Formats
{% include prop-format.html label="array" content="transformOrigin-object.md" %}
{% include prop-format.html label="array" content="transformOrigin-array.md" %}
{% include prop-format.html label="array" content="transformOrigin-number.md" %}
{% include prop-format.html label="array" content="transformOrigin-boolean.md" %}

### Example
{% include alert story="/examples/transform-origin/" %}
{% highlight javascript %}{
  classes: { 
    text: { pos:{z:40}, origin:{z:-40}, font:40 }
  },
  frame: { aspectRatio:1 },
  items: [
    { text:"X",
      init: {
        class:"text",
        color:"rgba(0,127,127,0.8)"
      },
      action: {anim:[5,"linear"], rot:{x:360}}
    },
    { text:"Y",
      init: {
        class:"text", 
        color:"rgba(127,0,0,0.8)",
        rot:{y:-180}
      },
      action: {anim:[5,"linear"], rot:{y:180}}
    }
  ]
}
{% endhighlight %}
