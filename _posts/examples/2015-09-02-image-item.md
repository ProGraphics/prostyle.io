---
layout: post-animation
title: "Image Item"
category: examples
desc: "An example of how easy it is to add an image to your story and make it bounce around."
tags: 
  - text
  - eases
story: "examples/image-item.json5"
story2: "examples/image-item-2.json5"
---
# Image Item
This example adds a single image item and then scripts it with an elastic bounce.

Both the <code>width</code> and <code>height</code> are set to <samp class="number">70</samp> percent which overrides the image's default aspect ratio.  The focal point of the stretches is defined by setting the [transformOrigin](/properties/#transform-origin) to the bottom, center of the image.

### Animation
The animation is performed with three [scripts](/concepts/#scripts), which all execute at the same time. The first script performs two actions. It scales the image up to <samp class="number">140</samp> percent, and nudges the position down a bit.  The position is moved to compensate for the extra whitespace in the image.  The second action simply returns the position.

The second and third scripts have a single action each.  They both <code>delay</code> the same amount of time as the scaling action in the first script.  They then take over the scaling and bring it back to 100%.

Two scripts are used so that the dimensions can be animated with different [eases](/concepts/#eases).
