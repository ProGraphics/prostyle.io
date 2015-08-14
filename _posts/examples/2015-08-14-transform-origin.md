---
layout: post-animation
title: "Transform Origin"
category: examples
desc: "Defines the point in 3D space in which transforms, such as rotation, are relative to. The origin defaults to the center of the item, but may be moved relative to that."
tags: 
  - text
  - transform-origin
story: "examples/transform-origin.json5"
---
# Transform Origin

The _transform origin_ defines the point in 3D space in which transforms, such as rotation, are relative to.  This example demonstrates rotation around the x and y axes.

### Configuration

The story uses two [text items](/models/#&middot;-text-item). To avoid duplication, a [class](/properties/#class) named _text_ is configured with common property values. The class is associated with the text items in their <code>init</code> entries.

By default, items are positioned in the _center of the screen_ at <samp class="number">[0,0,0]</samp>, and each item has a transform origin in the _center of the items_ at <samp class="number">[0,0,0]</samp>. The items are pulled forward on the <code>z</code> axis <samp class="number">35</samp> percent.  Since the origin is relative to the item, not the page, the origin moves with it.  So, the origin is moved back on the <code>z</code> axis to <samp class="number">-35</samp> percent.  This, in essence, counters the item's positional movement.

The frame is configured with an aspect ratio of <samp class="number">1.6</samp> just to give the animation a little extra vertical space than the default <samp class="number">1.777</samp>.


### Animation

The _X_ text item starts with an _x rotation_ value of <samp class="number">0</samp>, the default, and animates to <samp class="number">360</samp>.  Since 0 and 360 look the same, and a linear ease is used, the animation appears to start where it left off without any jarring.

The _Y_ text item works the same, except it animates the _y rotation_ and is initialized at <samp class="number">-180</samp> degrees and goes to <samp class="number">180</samp>. The different angles are used so to make the text items _diametrically opposed_.