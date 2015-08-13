---
layout: post-animation
title: "Hello World in 3D"
category: gallery
desc: "Independent scripted animations of the words Hello and World that are synchronized to finish at the same time."
tags: 
  - text
thumbnail: "hello-world.png"
story: "gallery/hello-world.json5"

---
# Hello World in 3D

Two [text items](/models/#&middot;-text-item) are scripted to animate independently but finish at the same time so that the story can be looped.

### Animation

The word __Hello__ looks complicated because it spins around in three dimensions.  However, it is actually a straight-forward animation of the [rotation](/properties/#rotation) property. The <code>y</code> value of <samp class="number">-360</samp> and <code>z</code> value of <samp class="number">540</samp> make all the difference.  Try changing those numbers and see what happens.  Since the second action rotates to <samp class="number">[180,180,180]</samp>, which _looks_ the same as the initialized value of <samp class="number">[0,0,0]</samp>, there isn't any jarring when the animation restarts.

The word __World__ is a bit more complicated because it is composed of three separate scripts.  The first two animate the <code>x</code> and <code>y</code> position values independently, simultaneously, over the same duration, but with different [easing](/concepts/#eases). This creates a curved movement.

The third script sequences two movements, one after the the other, after waiting 3 seconds, which moves the text to the top-right and then back to the starting point in the bottom-right.