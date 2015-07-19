---
layout: tocify
title: "Concepts"
teaser: "The documentation is a work in progress..."
permalink: "/docs/concepts/"
ace-readonly-js: true;
---
## Overview
{: class='t0'}

<div style="display:inline-block;max-width:160px;float:right;margin:0.5em 0 0 0.5em">{% include ad.html %}</div>
Pro Motion animations are referred to as _stories_. They are translated from [JSON](#){:data-toc='json'} into _web content_ and a _timeline_. The [timeline](#){:data-toc='timeline-and-steps'} instructs how the content's [properties](#){:data-toc='properties'} are changed over time.

## Story
Each story is composed of a _canvas_, a _frame_, and one or more _flows_. Each flow contains one or more _pages_, and each page contains one or more _items_.

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
To keep story documents concise, Pro Motion supports shortcuts.  There are three kinds.

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

When parsing a story, Pro Motion searches for and uses, _in order_, <code>flows</code>, <code>flow</code>, <code>pages</code>, <code>page</code>, <code>items</code>, <code>item</code>. Only one will be used. Once one is found, _others are ignored_.

#### Scripts and Actions
Scripts and actions may be shortcutted like flows, pages, and items.  If there are multiple scripts, then a <code>scripts</code> entry must be used. Otherwise, just use <code>script</code>.  If the one script is the default <code>scriptType</code> (step) then just use <code>actions</code> or <code>action</code> depending upon the count of actions.

Pro Motion searches for and uses, _in order_, <code>scripts</code>, <code>script</code>, <code>actions</code>, <code>action</code>. Only one will be used. Once one is found, _others are ignored_.

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
		{% include alert text="Pro Motion uses a lenient form of JSON called <a rel='nofollow' target='_blank' href='http://json5.org/'>JSON5</a>." %}
	</div>
</div>

<div class="row">
  <div class="small-12 medium-10 medium-centered large-8 columns">
		{% include alert warning="JSON supports others types of values, but these 5 are what you’ll use with Pro Motion." %}
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
  title: "Pro Motion",
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
_undocumented_

### Setup
_undocumented_

### Properties
_undocumented_

<hr class="t60 b60">

## Property Sets
_undocumented_

### Multiple
_undocumented_

<hr class="t60 b60">

## Pseudo-Properties
_undocumented_

<hr class="t60 b60">

## Timeline and Steps
_undocumented_

### Steps
_undocumented_

<hr class="t60 b60">

## Alignment and Origins
_undocumented_

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