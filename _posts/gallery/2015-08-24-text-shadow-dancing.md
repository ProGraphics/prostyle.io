---
layout: post-animation
title: "Text Shadow Dancing"
desc: "Using text shadow animation to get some pleasing visual effects."
category: gallery
tags: 
  - text
thumbnail: "text-shadow-dancing.png"
story: "gallery/text-shadow-dancing.json5"
story2: "gallery/text-shadow-dancing-2.json5"
story3: "gallery/text-shadow-dancing-3.json5"
---
# Text Shadow Dancing

Text shadows are applied with the [textShadow](/properties/#text-shadow) property. The three stories [animate](/properties/#animation) each character for half a second, repeated <samp class="number">3</samp> times. So each letter pops up and down twice over a total of two seconds.

Try changing the _repeat_ value to <samp class="number">1</samp>, <samp class="number">5</samp> or <samp class="number">7</samp> and see the effect.

The characters are staggered so that each starts half a second after the prior one, so every other character is synchronized.

A <samp class="string">sine</samp> wave ease is used to for smooth movement.

Try changing the _ease_ to <samp class="string">circle</samp> and see the effect.     


### Adding Color

The second story initialized the default empty shadow with a purple shadow which has a one percent _blur_ but no _x_ and _y_ offset.  This appears as a thin purple outline around the text.  The shadow is then animated to a larger green shadow.


### Animate Multiple Shadows

The third story shows how to animate multiple shadows.  The textShadow property supports as many shadows as you want.  
