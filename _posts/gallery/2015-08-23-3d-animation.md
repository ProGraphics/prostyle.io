---
layout: post-animation
title: "3D Animation"
category: gallery
desc: "Three stories that progress from a simple 3D text animation to a similar but more advanced one."
tags: 
  - text
thumbnail: "3d-animation.png"
story: "gallery/3d-animation.json5"
story2: "gallery/3d-animation-2.json5"
story3: "gallery/3d-animation-3.json5"
---
# 3D Animation

These three stories show similar 3-dimensional animations, each adding a little more complexity and visual impact than the prior one.


### Rotating on Each Axis 

The first story rotates the text over <samp class="number">10</samp> seconds, to <code>x</code>, <code>y</code>, and <code>z</code> rotations of <samp class="number">540</samp>, <samp class="number">540</samp>, and <samp class="number">-540</samp> respectively.  Those angles combined _look_ the same as <samp class="number">[0,0,0]</samp> so the animation will not be jarring when the animation is looped.

Try changing the duration and angles.


### One Script per Axis

The second story rotates the text to the _same_ angles.  However, it does so using three separate [scripts](/concepts/#scripts), which execute simultaneously. This allows each to be [animated](/properties/#animation) slightly differently, with varying _durations_ and _delays_.  The <code>y</code> axis uses a <samp class="string">"bounce"</samp> ease for a nice effect.


### Rotate a Layer

The third story applies the _same_ rotation to a [layer](/models/#&middot;-layer-item), instead.  The layer is configured with a semi-transparent yellow color.  The layer has two text items that are positioned on the <code>z</code> axis.  Since the text items are _on_ the layer, they move with the layer as it rotates.

The text items are initialized with a [class](/properties/#class) so the common property values aren't duplicated.