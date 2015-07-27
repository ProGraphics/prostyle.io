---
layout: tocify
title: "Concepts"
teaser: "The documentation is a work in progress..."
permalink: "/docs/concepts/"
ace-readonly-js: true;
---
## Overview
{: class='t0'}
ProStyle animations are referred to as _stories_. They are translated from [JSON](#){:data-toc='json'} into _web content_ and a _timeline_. The [timeline](#){:data-toc='timeline'} instructs how the content's [properties](#){:data-toc='properties'} are changed over time.

## Story
Each story is composed of a _canvas_, a _frame_, and one or more _flows_. Each flow contains one or more _pages_, and each page contains one or more _items_.

ProStyle renders the tree of model objects into a tree of rendered HTML and SVG content and an [timeline](#){:data-toc="timeline"} that animates the content's [properties](/docs/properties/).

### Model Objects
Models are the _things_ that exist within the story. They physically exist as web content. They can be [configured](#){:data-toc='setup'}, [styled](/docs/properties/) and [positioned](#){:data-toc='placement'}. Their properties may be animated with scripts.

| Model | Description  |
|:-:|---|
| [Canvas](/docs/models/#canvas) | The canvas is the drawing surface of the animation.  It is mapped to a single <code>div</code> element or the <code>body</code> element of an HTML page. The HTML element might be any rectangular size. For example, a body tag stretches to fit the browser window. There is only one canvas. |
| [Frame](/docs/models/#frame)  | The frame is centered within and stretches to fit the canvas, minus any padding. However, unlike the canvas, the frame always maintains a configured aspect ratio. There is only one frame. |
| [Flows](/docs/models/#flows)  | Flows control page-to-page animation, such as page stacks, carousels, etc. Each flow contains one or more pages. |
| [Pages](/docs/models/#pages)  | Pages contain the item content. The timeline navigates from page to page. Pages are analogous to slides in old-school presentation software. |
| [Items](/docs/models/#items)  | Items are the core visuals, such as text, images, and charts. |


### Structure
All story documents follow the same general structure. See if you can recognize the pattern in the following example. Just about everything is optional.

<div class="row">
  <div class="small-12 medium-10 medium-centered large-8 columns">
		{% include alert text="If the following looks like gibberish, don't fret.  It's only JSON, which you can <a href='#json'>learn about here</a>." %}
	</div>
</div>

<pre data-ace="readonly" style="width:100%;">{
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
}</pre>

The above might look a bit complicated.  If you study it for a moment, though, you’ll see a pattern.  Each model object can have [setup, properties, or both](#){:data-toc='setup-vs.-properties'}.  Properties are initialized with <code>init</code>.

Pages and items may have scripts. Each script has actions such as to animate property changes. The canvas and frame may also have scripts, but they are triggered in conjunction with a page using <code>canvasScripts</code> and <code>frameScripts</code>. For example, you might decide to change the canvas background when a certain page is displayed.


### Shortcuts
To keep story documents concise, ProStyle supports shortcuts.  There are three kinds.

1.  Flows, Pages and Items
2.  Scripts and Actions
3.  Setup


#### Flows, Pages and Items
Since a story may have more than one flow, the root of the document has a <code>flows</code> entry that accepts a list using [ ] brackets. Each entry in the list is a flow object, with { } brackets.

<pre data-ace="readonly" style="width:100%;">{
  flows: [
    { pages: [{...}, {...}] },
    { pages: [{...}, {...}] }
  ]
}</pre>

However, if the story has only one flow, the document can omit the <code>flows</code> entry and use a <code>flow</code> entry instead.

<pre data-ace="readonly" style="width:100%;">{
  flow: { pages: [{...}, {...}] }
}</pre>

That's better, but if there is only one flow and it is the default simple flow, the document can just have page or pages, depending upon the number of pages.

<pre data-ace="readonly" style="width:100%;">{
  pages: [{items:[...]}, {items:[...]}]
}</pre>

<pre data-ace="readonly" style="width:100%;">{
  page: {items:[...]}
}</pre>

Furthermore, if there is only one page, and that page doesn't override the defaults (no property init or scripts), the document can have just the child items or item, depending upon the number of items.

<pre data-ace="readonly" style="width:100%;">{
  items: [{...}, {...}]
}</pre>

<pre data-ace="readonly" style="width:100%;">{
  item: {...}
}</pre>

When parsing a story, ProStyle searches for and uses, _in order_, <code>flows</code>, <code>flow</code>, <code>pages</code>, <code>page</code>, <code>items</code>, <code>item</code>. Only one will be used. Once one is found, _others are ignored_.

#### Scripts and Actions
Scripts and actions may be shortcutted like flows, pages, and items.  If there are multiple scripts, then a <code>scripts</code> entry must be used. Otherwise, just use <code>script</code>.  If the one script is the default <code>scriptType</code> (step) then just use <code>actions</code> or <code>action</code> depending upon the count of actions.

ProStyle searches for and uses, _in order_, <code>scripts</code>, <code>script</code>, <code>actions</code>, <code>action</code>. Only one will be used. Once one is found, _others are ignored_.

Note that some model objects have [multiple sets of properties](#){:data-toc='multiple'}. For example, the text item has word properties. When shortcutting, prefix the name of the property set. e.g. _wordScript_, _wordActions_, _wordAction_, etc.

#### Setup
All one-time configuration of a model object is defined inside a <code>setup</code> entry.  However, if you wish, you can omit this extra level.  If configuration is not found in a setup entry, it looks one level up on the model object itself.

Either of these is valid for a text item.

<pre data-ace="readonly" style="width:100%;">{
  setup: { text: "animate!" }
}</pre>

<pre data-ace="readonly" style="width:100%;">{
  text: "animate!"
}</pre>

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

<pre data-ace="readonly" style="width:100%;">{
  town: “boston”,
  zipCode: 2112,
  child: { … }
}</pre>

### Primitives
There are three primitive value types.

* _Numbers_ can be positive or negative, with or without a decimal point.
    + They should not have formatting, such as commas.
* _Strings_ are lines of text wrapped in quotes.
* _Booleans_ are either __true__ or __false__.

<pre data-ace="readonly" style="width:100%;">{
  year: 2015,
  title: "ProStyle",
  awesome: true
}</pre>

### Arrays
Arrays are lists of values. They are enclosed in square [ ] brackets. Listed items are separated by a comma. Arrays may hold any of the types, including child arrays.

<pre data-ace="readonly" style="width:100%;">{
  numbers: [1,2,3],
  strings: ["a", "b", "c"],
  booleans: [true, false, true],
  objects: [{number: 1}, {string:"a"}, {}],
  arrays: [[0,0], [100,100]],
  mixed: [652, "banana", [true, false]]
}</pre>

### Resources
* <a rel='nofollow' target='_blank' href='http://en.wikipedia.org/wiki/JSON'>http://en.wikipedia.org/wiki/JSON</a>
* <a rel='nofollow' target='_blank' href='http://www.json.org/'>http://www.json.org/</a>
* <a rel='nofollow' target='_blank' href='http://www.json5.org/'>http://www.json5.org/</a>


<hr class="t60 b60">


## Setup vs. Properties
_Setup_ and _properties_ are two distinct ways that [model objects](/docs/models/) are configured. The difference is subtle, but important.

### Setup
Setup defines one-time configuration, which is core to how the model object works. Setup values are _immutable_.  That means that they are set once and cannot be changed.  ProStyle uses the setup to render and optimize the object.  For instance, setup values might render determine what HTML or SVG content to use. Setup values are defined in a <code>setup</code> entry.

<pre data-ace="readonly" style="width:100%;">{
  itemType: "text",
  setup: { text: "ProStyle!" }
}</pre>

### Properties
Unlike setup, properties _can_ be changed.  They are initialized in an <code>init</code> entry and can be changed in a [script](#){:data-toc="script"}.  There are many available [properties](/docs/properties).

<pre data-ace="readonly" style="width:100%;">{
  itemType: "text",
  setup: { text: "ProStyle!" },
  init: { opacity: 50 }.
  scripts: [
    { 
      actions: [{ delay: 5, opacity: 0 }]
    }
  ]
}</pre>

<hr class="t60 b60">

## Animation
_Animation_ is the [changing of properties](/docs/properties/#animation) over time using [scripts](#){:data-toc="scripts"}. Multiple scripts may run concurrently within a [step](#){:data-toc="steps"}, and the steps are sequenced into a _timeline_.

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

The total duration of a script is the sum of the durations of it’s actions. Extending the duration of an action pushes out the start of any remaining actions.

The combination of serial _steps_ of parallel _scripts_ of serial _actions_ makes ProStyle very powerful.  It’s easy to craft simple animations, yet flexible enough for complex interactions.


#### Set-Properties Action

Actions do things, such as set property values. Currently, ProStyle only supports one type of action: _set properties_.  So, the default <code>actionType</code> entry is <samp class="string">"properties"</samp>.  Future versions of ProStyle might support other types of actions. 

<p><div class="row">
<div class="medium-8 medium-centered large-6 columns">
<img src="/images/action.png" style="width:100%">
</div>
</div></p>

* An action may have a [delay property](/docs/properties/#delay) which describes how long to wait until the changes begin.
* An action may have an [animation property](/docs/properties/#animation) which describes how to change from old property values to new ones.

The duration of the action is the sum of the _delay_ and _animation_ values. If properties are set without a _delay_ or _animation_ then they will change instantly once the script executes the action, and the action will have no duration.

If two scripts attempt to change the same property value of the same model object at the same time, the second one will win.  The first one will be cancelled.


#### Events

Events trigger the start of scripts. There is currently only one kind of event; when a step has started. Other event types are under consideration for future versions. e.g. mouse and touch interaction.

Scripts have an event parameter, which can be “step1“, “step2“, “step3“, …

* If the event parameter is omitted, the default value is “step1“
* A value of “step” is an alias for “step1“



### Steps
The timeline has markers called _steps_. Multiple scripts can be processed simultaneously starting at a step. The next step does not start until all scripts in the prior step complete. The total duration of a step is the duration of the longest script it contains. The steps belong to a page.  Every page contains one or more steps.

ProStyle determines all of the scripts on a page, which includes the page’s scripts, any canvasScripts or frameScripts, and all of the scripts for the page’s items.  Each script is associated with a step using the step event.  The timeline is then generated.

Each step is associated with a single page, and each page is a member of a single flow.  Therefore, any given playhead position in the timeline is associated with one flow, one page, and one step.


### Eases
Eases are used to control how quickly or slowly a change occurs relative to the constant pace of time. Eases are sometimes referred to as _timing functions_, because they map the elapsed time within the duration of the animation to the completion percentage of the property change. Easing can be used to apply an effect, like bouncing or elasticity.

### Staggering
When there are multiple targets, like bars in a chart or characters in text, each can be staggered to start after the prior.


<hr class="t60 b60">


## Alignment
Unlike traditional web graphics, ProStyle is designed to work with _center alignment_.  Add an [item](/docs/models/#items) to a [page](/docs/models/#pages) and it will be automatically centered, regardless of it’s current or future size. Furthermore, positioning is relative from the center, as a percentage of the container’s dimensions. This greatly simplifies layout. Plus, because the [frame](/docs/models/#frame) maintains it's [aspect ratio](/docs/models/#demonstration), the animation will look the same on any screen of any size.

### Anchor
With center alignment, the _center of the item_ is positioned on the _center of it’s container_. The reference point on the item is called the _anchor_. Each item has an [anchor property](/docs/properties/#anchor) and a [position property](/docs/properties/#position). Both default to <code>[0,0]</code>, which is the center of each. The position property defines where the item is placed, relative to the container’s center. The anchor defines what point on the item will be directly on the position location. Anchors make it easy to align objects of different sizes.

### Transform Origin
The _transform origin_, like the _anchor_, is a reference point on the item.  It defines the point that transforms are relative to.  For instance, to rotate an item around it's top left corner, the transform origin would be set to <code>[-50,-50]</code>. By default, items rotate around their center because the transform origin is initially set to <code>[0,0]</code>.

<hr class="t60 b60">

## Color
_undocumented_

### Named Colors
_undocumented_

### RGB
_undocumented_

### Hex
_undocumented_

### HSL
_undocumented_

### Links
_undocumented_

<hr class="t60 b60">

## 3D
_undocumented_

<hr class="t60 b60">

## Placement
_undocumented_

<hr class="t60 b60">

## Stacks
_undocumented_

<hr class="t60 b60">

## Performance
_undocumented_

### Compositing
Hardware Acceleration - _undocumented_

### Size Vs. Scale
_undocumented_