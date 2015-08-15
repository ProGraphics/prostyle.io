---
layout: post-animation
title: "Transform Origin"
category: examples
desc: "Defines the point in 3D space in which transforms, such as rotation, are relative to. The origin defaults to the center of the item, but may be moved relative to that."
tags: 
  - text
  - transform-origin
story: "examples/transform-origin.json5"
story2: "examples/transform-origin-2.json5"
---
# Transform Origin

The [transform origin](/properties/#transform-origin) defines the point in [3D space](/concepts/#3d) in which transforms, such as rotation, are relative to.  This example demonstrates rotation around the x and y axes.

### Configuration

The story uses two [text items](/models/#&middot;-text-item). To avoid duplication, a [class](/properties/#class) named _text_ is configured with common property values. The class is associated with the text items in their <code>init</code> entries.

By default, items are positioned in the _center of the page_ at <samp class="number">[0,0,0]</samp>, and each item has a transform origin _in it's center_ at <samp class="number">[0,0,0]</samp>. The items are pulled forward on the <code>z</code> axis <samp class="number">40</samp> percent.  Since the origin is relative to the item, not the page, the origin moves with it.  The story sets the _transform origin_ of each item to <samp class="number">-40</samp> percent on the <code>z</code> axis.  This, in essence, counters the item's positional movement and puts them back to where they were initially from a global point of view.

The frame is configured with an aspect ratio of <samp class="number">1</samp> to show how the items move relative to a square space.


### Animation

The _X_ text item starts with an _x rotation_ value of <samp class="number">0</samp>, the default, and animates to <samp class="number">360</samp>.  Since 0 and 360 look the same, and a linear ease is used, the animation restarts without any jarring.

The _Y_ text item works the same, except it animates the _y rotation_ and is initialized at <samp class="number">180</samp> degrees and goes to <samp class="number">-180</samp>. The different angles are used so to make the text items _diametrically opposed_.


### Adding the Z Axis

The second story animation, which can be seen by clicking the button labeled __2__ underneath the editor, adds another text item that rotates around the _Z_ axis. It adjusts it's origin along the _X_ axis, so it needs to set the [expand](/properties/#transform-origin) value and compensate for the item's dimensions. 