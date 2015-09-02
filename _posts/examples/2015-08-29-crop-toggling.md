---
layout: post-animation
title: "Crop Toggling"
category: examples
desc: "Text is rotated within a layer that toggles between being cropped or not."
tags: 
  - crop
story: "examples/crop-toggling.json5"
---
# Crop Toggling

This example rotates some text around twice, using a linear [timing function](/concepts/#eases) so the animation loops smoothly.  After exactly one rotation, the [crop](/properties/#crop) property is set to <samp class="boolean">true</samp>. This clips the text so it is not visible outside of the layer's boundaries. 

The crop property cannot be [animated](/properties/#animation), since the value is true/false. There isn't a halfway point. However, it can be scripted to change at a particular time, using the [delay](/properties/#delay) property, as this story demonstrates.
