---
layout: post-animation
title: "Timing Functions"
category: gallery
desc: "The timing function determines how far an animation has progressed at a particular duration."
tags: 
  - text
thumbnail: "timing-functions.png"
story: "gallery/timing-functions.json5"

---
# Timing Functions
The timing function, also known as _ease_, determines how far an animation has progressed at a particular time in the animation's duration. The simplest example is <samp class="string">linear</samp> which is aligned directly to the duration; e.g. the animation is 25% along when the duration time is 25% complete.  More elaborate functions provide _effects_ such as bouncing or elasticity.

The timing function is defined with the _ease_ value of the [animation](/properties/#animation) property. 


### Labels

This story uses nine rotated labels. To avoid duplication, the label properties are added to a [class](/properties/#class) named _label_, and each [text item](/models/#&middot;-text-item) uses that class.

The labels are set with a [transform-origin](/properties/#transform-origin) on the left edge of the text, and then rotated <samp class="number">90</samp> degrees counter-clockwise around that _origin_. This aligns the text regardless of the text length.


### Balls

The <code>y</code> positions of ball images are animated to a lower point and then back.  The first animation uses the <samp class="string">out</samp> ease adjustment, which is the default.  On the way back up, the <samp class="string">in</samp> ease adjustment is explicitly used, which reverses the effect.
