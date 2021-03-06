---
layout: page-doc
title: "Concepts"
permalink: "/concepts/"
---
## Overview
{: class='t0'}
ProStyle animations are referred to as _stories_. They are translated from [JSON](#){:data-toc='json'} into _web content_ and a _timeline_. The [timeline](#){:data-toc='timeline'} instructs how the content's [properties](#){:data-toc='properties'} are changed over time.

## Story
Each story is composed of a _canvas_, a _frame_, and one or more _flows_. Each flow contains one or more _pages_, and each page contains one or more _items_.

ProStyle renders the tree of model objects into a tree of HTML and SVG content and a [timeline](#){:data-toc="timeline"} that animates the content's [properties](/properties/).

### Model Objects
Models are the _things_ that exist within the story. They physically exist as web content. They can be [configured](#){:data-toc='setup'}, [styled](/properties/) and [positioned](#){:data-toc='placement'}. Their properties may be animated with [scripts](#){:data-toc="scripts"}.

| Model | Description  |
|:-:|---|
| [Canvas](/models/#canvas) | The canvas is the drawing surface of the animation.  It is mapped to a single <code>div</code> element or the <code>body</code> element of an HTML page. The HTML element might be any rectangular size. For example, a body tag stretches to fit the browser window. There is only one canvas. |
| [Frame](/models/#frame)  | The frame is centered within and stretches to fit the canvas, minus any padding. However, unlike the canvas, the frame always maintains a configured aspect ratio. There is only one frame. |
| [Flows](/models/#flows)  | Flows control page-to-page animation, such as page stacks, carousels, etc. Each flow contains one or more pages. |
| [Pages](/models/#pages)  | Pages contain the item content. The timeline navigates from page to page. Pages are analogous to slides in old-school presentation software. |
| [Items](/models/#items)  | Items are the core visuals, such as text, images, and charts. |


### Structure
All story documents follow the same general structure. See if you can recognize the pattern in the following example. Just about everything is optional.

<div class="row">
  <div class="small-12 medium-10 medium-centered large-8 columns">
		{% include alert text="If the following looks like gibberish, don't fret.  it’s only JSON, which you can <a href='#json'>learn about here</a>." %}
	</div>
</div>

{% highlight javascript %}
{
  canvas: {
    setup: {...},
    init: {..}
  },
  frame: {
    setup: {...},
    init: {...}
  },
  flows: [
    {
      flowType: "...",
      setup: {...},
      pages: [
        {
          init: {...},
          scripts: [
            {
              scriptType: "...",
              actions: [{...}, {...}]
            },
            {...}
          ],
          canvasScripts: [...],
          frameScripts: [...],
          items: [
            {
              itemType:"...",
              init: {...},
              scripts: [...]
            },
            {...}
          ]
        },
        {...}
      ],
    }
  ]
}
{% endhighlight %}

The above might look a bit complicated.  If you study it for a moment, though, you’ll see a pattern.  Each model object can have [setup, properties, or both](#){:data-toc='setup-vs.-properties'}.  Properties are initialized with <code>init</code>.

Pages and items may have scripts. Each script has actions such as to animate property changes. The canvas and frame may also have scripts, but they are triggered in conjunction with a page using <code>canvasScripts</code> and <code>frameScripts</code>. For example, you might decide to change the canvas background when a certain page is displayed.


### Shortcuts
To keep story documents concise, ProStyle supports shortcuts.  There are three kinds.

1.  Flows, Pages and Items
2.  Scripts and Actions
3.  Setup


#### Flows, Pages and Items
Since a story may have more than one flow, the root of the document has a <code>flows</code> entry that accepts a list using [ ] brackets. Each entry in the list is a flow object, with { } brackets.

{% highlight javascript %}
{
  flows: [
    { pages: [{...}, {...}] },
    { pages: [{...}, {...}] }
  ]
}
{% endhighlight %}

However, if the story has only one flow, the document can omit the <code>flows</code> entry and use a <code>flow</code> entry instead.

{% highlight javascript %}
{
  flow: { pages: [{...}, {...}] }
}
{% endhighlight %}

That's better, but if there is only one flow and it is the default simple flow, the document can just have page or pages, depending upon the number of pages.

{% highlight javascript %}
{
  pages: [{items:[...]}, {items:[...]}]
}
{% endhighlight %}

{% highlight javascript %}
{
  page: {items:[...]}
}
{% endhighlight %}

Furthermore, if there is only one page, and that page doesn't override the defaults (no property init or scripts), the document can have just the child items or item, depending upon the number of items.

{% highlight javascript %}
{
  items: [{...}, {...}]
}
{% endhighlight %}

{% highlight javascript %}
{
  item: {...}
}
{% endhighlight %}

When parsing a story, ProStyle searches for and uses, _in order_, <code>flows</code>, <code>flow</code>, <code>pages</code>, <code>page</code>, <code>items</code>, <code>item</code>. Only one will be used. Once one is found, _others are ignored_.

#### Scripts and Actions
Scripts and actions may be shortcutted like flows, pages, and items.  If there are multiple scripts, then a <code>scripts</code> entry must be used. Otherwise, just use <code>script</code>.  If the one script is the default <code>scriptType</code> (step) then just use <code>actions</code> or <code>action</code> depending upon the count of actions.

ProStyle searches for and uses, _in order_, <code>scripts</code>, <code>script</code>, <code>actions</code>, <code>action</code>. Only one will be used. Once one is found, _others are ignored_.

Note that some model objects have [multiple sets of properties](/models/#property-sets). For example, the text item has word properties. When shortcutting, prefix the name of the property set. e.g. _wordScript_, _wordActions_, _wordAction_, etc.

#### Setup
All one-time configuration of a model object is defined inside a <code>setup</code> entry.  However, if you wish, you can omit this extra level.  If configuration is not found in a setup entry, it looks one level up on the model object itself.

Either of these is valid for a text item.

{% highlight javascript %}
{
  setup: { text: "animate!" }
}
{% endhighlight %}

{% highlight javascript %}
{
  text: "animate!"
}
{% endhighlight %}

<hr class="t60 b60">

## JSON
JavaScript Object Notation is a simple text file format. It uses named values.  Each value may be one of 5 basic types of information; object, array, text, number or true/false.

<div class="row">
  <div class="small-12 medium-10 medium-centered large-8 columns">
		{% include alert text="ProStyle uses a lenient form of JSON called <a rel='nofollow' target='_blank' href='http://json5.org/'>JSON5</a>." %}
	</div>
</div>

<div class="row">
  <div class="small-12 medium-10 medium-centered large-8 columns">
		{% include alert warning="JSON supports others types of values, but these 5 are what you’ll use with ProStyle." %}
	</div>
</div>


### Objects
An _object_ is a container of named values.  Each object is enclosed in curly { } brackets containing zero or more named values.  Each named value is separated by a comma. Objects can have named child objects.

{% highlight javascript %}
{
  town: "boston",
  zipCode: 2112,
  child: { ... }
}
{% endhighlight %}

### Primitives
There are three primitive value types.

* _Numbers_ can be positive or negative, with or without a decimal point.
    + They should not have formatting, such as commas.
* _Strings_ are lines of text wrapped in quotes.
* _Booleans_ are either __true__ or __false__.

{% highlight javascript %}
{
  year: 2015,
  title: "ProStyle",
  awesome: true
}
{% endhighlight %}

### Arrays
Arrays are lists of values. They are enclosed in square [ ] brackets. Listed items are separated by a comma. Arrays may hold any of the types, including child arrays.

{% highlight javascript %}
{
  numbers: [1,2,3],
  strings: ["a", "b", "c"],
  booleans: [true, false, true],
  objects: [{number: 1}, {string:"a"}, {}],
  arrays: [[0,0], [100,100]],
  mixed: [652, "banana", [true, false]]
}
{% endhighlight %}

### Resources
* <a rel='nofollow' target='_blank' href='http://en.wikipedia.org/wiki/JSON'>http://en.wikipedia.org/wiki/JSON</a>
* <a rel='nofollow' target='_blank' href='http://www.json.org/'>http://www.json.org/</a>
* <a rel='nofollow' target='_blank' href='http://www.json5.org/'>http://www.json5.org/</a>


<hr class="t60 b60">


## Setup vs. Properties
_Setup_ and _properties_ are two distinct ways that [model objects](/models/) are configured. The difference is subtle, but important.

### Setup
Setup defines one-time configuration, which is core to how the model object works. Setup values are _immutable_.  That means that they are set once and cannot be changed.  ProStyle uses the setup to render and optimize the object.  For instance, setup values might determine what HTML or SVG content to use. Setup values are defined in a <code>setup</code> entry.

{% highlight javascript %}
{
  itemType: "text",
  setup: { text: "ProStyle!" }
}
{% endhighlight %}

### Properties
Unlike setup, [properties](/properties/) _can_ be changed.  They are initialized in an <code>init</code> entry and can be changed in a [script](#){:data-toc="scripts"}.

{% highlight javascript %}{
  itemType: "text",
  setup: { text: "ProStyle!" },
  init: { opacity: 50 }.
  action: { delay: 5, opacity: 0 }
}
{% endhighlight %}

<hr class="t60 b60">

## Animation
_Animation_ is the changing of properties [over time](/properties/#animation) using [scripts](#){:data-toc="scripts"}. Multiple scripts may execute concurrently within a [step](#){:data-toc="steps"}, and the steps are sequenced into a _timeline_.

### Timeline
After reading the [JSON](#){:data-toc="json"}, ProStyle inserts the required HTML and SVG into the web page, and sequences the [scripts](#){:data-toc="scripts"} into a _timeline_.  Think of the timeline like a movie player.  It is linear.  The player will play from beginning to end, and the playhead can be seeked to any time as needed.

<p><div class="row">
<div class="medium-8 medium-centered large-6 columns">
<img src="/images/timeline.png" style="width:100%">
</div>
</div></p>

### Scripts
A _script_ is a sequence of one or more _actions_. A script's actions are executed in order, one after the other. Once an action completes, the next one begins. Scripts within a step run _in parallel_, but actions within a script run _in series_.

<p><div class="row">
<div class="medium-8 medium-centered large-6 columns">
<img src="/images/scripts.png" style="width:100%">
</div>
</div></p>

The duration of a _script_ is the _sum_ of its _action's_ durations. Extending the duration of an action pushes out the start of any remaining actions within that script.

The duration of a _step_ is the duration of its longest _script_. 

The combination of serial _steps_ of parallel _scripts_ of serial _actions_ makes ProStyle very powerful.  It’s easy to craft simple animations, yet flexible enough for complex interactions.


#### Set-Properties Action

Actions do things, such as set property values. Currently, ProStyle only supports one type of action: _set properties_.  So, the default <code>actionType</code> entry is <samp class="string">"properties"</samp>.  Future versions of ProStyle might support other types of actions. 

<p><div class="row">
<div class="medium-8 medium-centered large-6 columns">
<img src="/images/action.png" style="width:100%">
</div>
</div></p>

* An action may have a [delay property](/properties/#delay) which describes how long to wait until the changes begin.
* An action may have an [animation property](/properties/#animation) which describes how to change from old property values to new ones.

The duration of the action is the sum of the _delay_ and _animation_ values. If properties are set without a _delay_ or _animation_ then they will change instantly once the script executes the action, and the action will have no duration.

If two scripts attempt to change the same property value of the same model object at the same time, the second one will win.  The first one will be cancelled.


#### Events

Events trigger the start of scripts. Events are also referred to as _script types_. There is currently only one kind; when a [step](#){:data-toc="steps"} has started. Other script types are under consideration for future versions. e.g. mouse and touch interaction.

Scripts have a <code>scriptType</code> parameter, which can be “step1“, “step2“, “step3“, …

* If the scriptType is omitted, the default value is “step1“
* A value of “step” is an alias for “step1“


### Steps
The [timeline](#){:data-toc="timeline"} has markers called _steps_. Multiple scripts can be processed simultaneously starting at a step. The next step does not start until all scripts in the prior step complete. The total duration of a step is the duration of the longest script it contains. The steps belong to a page.  Every page contains one or more steps.

ProStyle generates a timeline by parsing all of the scripts on each page, which includes the page’s scripts, any <code>canvasScripts</code> or <code>frameScripts</code>, and all of the scripts for the page’s items.  Each script is associated with a step. The timeline plays each step in order, moving from page to page, as the last step of each page completes.

Each step is associated with a single page, and each page is a member of a single flow.  Therefore, any given playhead position in the timeline is associated with one flow, one page, and one step.


### Eases
Eases are used to control how quickly or slowly a change occurs relative to the constant pace of time. They map any time within the duration of the animation to the completion percentage of the property change. Easing can be used to apply an effect, like bouncing or elasticity.

An ease is composed of a [timing function](/gallery/timing-functions/), a _direction_ and a _strength_.

#### Timing Functions

| Function | Description  |
|:-:|---|
| <samp>"back"</samp> | The property value goes beyond the target value, slows down, and then returns and rests at the target value. It is like a one-pass elastic ease. |
| <samp>"bounce"</samp> | The property value reaches the target value quickly, bounces back toward the start value, over and over, diminishing in strength each iteration. |
| <samp>"circle"</samp> | A curved function that looks like a circle when plotted. It is only slightly different than sine. |
| <samp>"curve"</samp> | a simple quadratic curve where the activity starts quickly and slows as the target value approaches. |
| <samp>"elastic"</samp> | Similar to bounce except the diminishing bounces alternate between each side of the target value. |
| <samp>"expo"</samp> | a simple reverse exponential curve where the activity starts quickly and slows as the target value approaches. |
| <samp>"linear"</samp> | The property moves from starting value to target value at a constant rate. |
| <samp>"sine"</samp> | A curved function based on the sine trigonometric function. It is only slightly different than circle. |
| <samp>"slowmo"</samp> | The property quickly progresses and then slowly progresses and then quickly progresses to the target value. |
| <samp>"slowmoback"</samp> | Similar to slowmo except the slow part plays backward. |
| <samp>"stepped"</samp> | The distance between the starting and target values is segmented into 3, 6, 12 or 24 steps, depending upon the strength. |
| <samp>"stop"</samp> | The animation starts quickly, decelerates to a stop in the middle, and then accelerates to the target value. |
| <samp>"stopandreturn"</samp> | Similar to stop, but the stop point is the target value and the animation ends back at the start value. |


#### Direction

| Direction | Description  |
|:-:|---|
| <samp>"out"</samp> | The effect of a timing function happens at the target value side. This is the default. |
| <samp>"in"</samp> | The effect of a timing function happens at the starting value side. |
| <samp>"inout"</samp> | The effect happens on both sides. |


#### Strength

The impact of each strength value is particular to each timing function. For example, it effects the number of steps with <samp>"stepped"</samp>, the length of the slow section of <samp>"slowmo"</samp>, the iterations with <samp>"elastic"</samp>, etc. 

| Strength | Description  |
|:-:|---|
| <samp>"less"</samp> | The effect is diminished. |
| <samp>"normal"</samp> | The default configuration, usually the best. |
| <samp>"more"</samp> | The effect is stronger. |
| <samp>"extra"</samp> | The effect is very strong. |


### Staggering

When there are multiple targets, like bars in a chart or characters in text, each can be staggered by applying a delay using the <code>stagger</code> value of the [animation](/properties/#animation) property.


<hr class="t60 b60">


## Alignment
Unlike traditional web graphics, ProStyle is designed to work with _center alignment_.  Add an [item](/models/#items) to a [page](/models/#pages) and it will be automatically centered, regardless of its current or future size. Furthermore, positioning is relative from the center, as a percentage of the container’s dimensions. This greatly simplifies layout. Because the [frame](/models/#frame) maintains its [aspect ratio](/models/#demonstration), the animation will look the same on _any screen_ of _any size_.

### Anchor
With center alignment, the _center of the item_ is positioned on the _center of its container_. The reference point on the item is called the _anchor_. Each item has an [anchor property](/properties/#anchor) and a [position property](/properties/#position). Both default to <samp class="number">[0,0]</samp>, which is the center of the item. The position property defines where the item is placed, relative to the container’s center. The anchor defines what point on the item will be directly on the position location. Anchors make it easy to align objects of different sizes.

### Transform Origin
The [transform origin](/properties/#transform-origin), like the _anchor_, is a reference point on the item (unless expanded).  It defines the point that transforms are relative to.  For instance, to rotate an item around its top left corner, the transform origin would be set to <code>[-50,-50]</code>. By default, items rotate around their center because the transform origin is initially set to <code>[0,0]</code>.

By default, the <code>x</code> and <code>y</code> values of the transform origin are percentages of the item's dimensions. However, if the <code>expand</code> value is set to <samp class="boolean">true</samp>, the numbers will be considered a percentage of the container's dimensions, usually the page.

<hr class="t60 b60">

## Color
ProStyle supports the standard web formats for describing color.

### Named Colors
The simplest option is to use a color by name.  All standard browsers support a large set of [HTML and X11 color names](http://en.wikipedia.org/wiki/Web_colors#HTML_color_names). Any of these names may be used in a property that expects a color. They are _not_ case sensitive.

### RGB
Another common way to describe a color is to combine the three primary colors; red, green and blue.  Display devices use an [additive color model](https://en.wikipedia.org/wiki/Additive_color) so adding these primary colors results in lighter colors, topping out at white. Reducing the amount of primary color results in darker colors, approaching black.  Each value has a decimal range of 0-255.  A red value of 0 means no red.  A red value of 255 means as much red as possible.  Any combination of these three colors can be written using the <code>rgb()</code> syntax. <code>rgb(0,0,0)</code> equals black. <code>rgb(255,255,255)</code> equals white. <code>rgb(255,255,0)</code> equals yellow, and so on.

There is also a version of rgb that supports semi-transparency.  The forth parameter of <code>rgba(255,255,0,0.5)</code> is a number between 0 and 1, where 0 is completely transparent and 1 is completely opaque.

### Hex
It is very common for web colors to be described with _hexadecimal_ numbers. Instead of each digit having 10 values (0 to 9), each digit has 16 values (0123456789ABCDEF). Color values in hexadecimal range from 00 to FF, which is 256 distinct values just like 0 to 255 is in decimal.  Hex colors are prefixed with a hash character to distinguish them.

All of these represent the same solid red color.

{% highlight javascript %}
color: "red"
color: "rgb(255,0,0)"
color: "rgba(255,0,0,1)"
color: "#FF0000"
color: "#F00"
{% endhighlight %}

Notice the last one has only one hex value per primary color. This is a short form which uses shorter strings in return for less granularity.

### HSL and Alpha
A different way to describe colors is with hue, saturation, and lightness. _Hue_ is the 360 degree color wheel value representing the rainbow of colors. _Saturation_ describes how vivid the color is.  100% is as vivid as possible. Lower numbers make the color grayer (washed out).  A _lightness_ higher than 50% approaches white, and a lightness lower than 50% approaches black.

Optionally, an _alpha_ value between 0 and 1 may be used to make the color semi-transparent.  <code>hsl(0,100%,50%)</code> is red.  <code>hsla(120,100%,50%,0.5)</code> is semi-transparent green.

### Links
* [http://en.wikipedia.org/wiki/Web_colors](http://en.wikipedia.org/wiki/Web_colors)
* [http://en.wikipedia.org/wiki/Color](http://en.wikipedia.org/wiki/Color)


<hr class="t60 b60">

## 3D
ProStyle makes it simple to [place](#){:data-toc="placement"} and [animate](#){:data-toc="animation"} objects in _three_ dimensions. It’s important to note, though, that the objects themselves have no depth. Imagine a piece of paper held out in front of you. It has width and height, but no depth. Of course paper does have a small amount of depth, but imagine it didn’t. If it was turned 90 degrees on its side, you would no longer be able to see it. With ProStyle, two dimensional objects can be positioned anywhere in _3D space_, just as our piece of paper can be moved around the room.

Since the device’s screen is also two dimensional, modern browsers have built-in support to emulate a third dimension by using _perspective_, which ProStyle leverages when rendering. ProStyle configures a vanishing point in the center of the screen.  The dimensions of the frame provide the horizontal and vertical extents of the view space. The depth, or length of the Z axis, is calculated based on the X and Y axes, using [Euclidean geometry](http://en.wikipedia.org/wiki/Euclidean_geometry).

### Example

{% include alert story="/gallery/3d-text-animation/" %}
{% highlight javascript %}
{
  classes: {
      text3d: {
        position: {z:3},
        font: 30,
        color: "#456",
        textShadow: [0.5,0.5,2,"rgba(0,0,0,0.5)"]
      }
  },
  item: {
      itemType: "layer",
      init: {
        size: [50,40],
        bg: "rgba(255,255,127,0.7)",
        corners: true,
        shadow: [0.5,0.5,2,"rgba(0,0,0,0.5)"]
      },
      scripts: [
          { action: {delay:1, anim:10, rot:{x:540}}},
          { action: {delay:0.5, anim:[12,"bounce"], rot:{y:540}}},
          { action: {anim:11, rot:{z:-540}}}
      ],
      items: [{
        text:"In 3D!",
        init: {class:"text3d", pos:{z:4}}
      },
      {
        text:"In 3D!",
        init: {class:"text3d", pos:{z:-4}}
      }]
  }
}
{% endhighlight %}


<hr class="t60 b60">

## Placement
_Placement_ is a term used to describe where an object is in [3D](#){:data-toc="3d"} space. When this documentation refers to placement, or how an object is placed, it means the combination of the following four _properties_.

* [Position](/properties/#position)
* [Rotation](/properties/#rotation)
* [Scale](/properties/#scale)
* [Opacity](/properties/#opacity)

The _scale_ and _opacity_ properties do not really influence _where_ an object is placed, but they are included in this definition nevertheless. It is not always easy to visually distinguish whether an object is moved along the z axis (three d) or simply scaled larger.  Opacity is included because the transparency level indicates what can be seen behind it.

<div class="row">
  <div class="small-12 medium-10 medium-centered large-8 columns">
		{% include alert text="Animating only placement properties may trigger hardware acceleration on devices that support it, for fast, smooth animation." %}
	</div>
</div>


<hr class="t60 b60">

## Performance
ProStyle generates web content and scripts that leverage _hardware acceleration_ whenever possible. Hardware acceleration happens when the animation uses certain approaches that allow the video card processors (GPU) to do calculations, and use algorithms that are embedded in hardware, as opposed to programs in random access memory. They can be significantly faster than using standard CPU processors. Video processors are designed to maximize parallel execution.

The way in which a story is written will impact whether parts of the animation may be processed by the video hardware. A general understanding of _compositing_ will help you write more efficient animations.


### Compositing
Individual content is processed by the GPU separately and then combined. Think of it like layers in Photoshop. Each layer represents a two-deminsional array of pixels.  The browser will rasterize the content (draw it as pixels) into each layer. The size, in pixels, is defined by the content (e.g. font size). The act of drawing the pixels is not hardware accelerated because the software in the CPU must build the bitmap that will later be processed by the GPU.

Once a layer is created, it can be manipulated very quickly using hardware-based routines. The layer can be scaled, rotated, made semi transparent, and so forth. Animating properties that force the layer to be redrawn will be slower than those that manipulate an existing layer. If an animation changes _only_ one or more of the [placement](#){:data-toc="placement"} properties, it may likely be hardware accelerated by the GPU.
 
### Size vs. Scale
The [scale](/properties/#scale) property stretches content vertically or horizontally. The stretching is performed _after_ the content has been rasterized to pixels. So, scaling larger will make the content look pixelated. To avoid pixelation, the content may be rendered larger and initially scaled much smaller. The animation can then scale up to the natural dimensions. However, there is a tradeoff.  This approach will render a larger bitmap layer and use more GPU memory.


{% include alert story="/examples/size-vs-scale/" %}
{% highlight javascript %}
{
  item:  {
    text:"font",
    init: {
      pos:[-50,-50], anchor:[-50,-50],
      origin:[-50,-50], color:"#094766",
      font:300, scale:10
    },
    action: {
      anim:{ dur:5, rep:1, yoyo:true },
      scale:100
    }
  }
}
{% endhighlight %}


<hr class="t60 b60">

## Stacks
_undocumented_
