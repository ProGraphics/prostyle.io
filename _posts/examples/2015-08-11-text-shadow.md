---
layout: post-animation
title: "Text Shadow"
category: examples
desc: "Animate one or more text shadows and use a shadow to form a text outline."
tags: 
  - text
  - textShadow
story: "examples/text-shadow.json5"
story2: "examples/text-shadow-2.json5"
story3: "examples/text-shadow-3.json5"
---
# Text Shadow

This example initializes a text item as <samp class="number">60</samp> percent the height of the frame, with a dark blue color and a [shadow](/properties/#text-shadow).  The shadow is not offset from the text, but does have a <samp class="number">3</samp> percent blur.

### Animation

A repeating action is added that animates for four seconds, two seconds up and two seconds down.  The text is moved up the z axis, coming closer to you.  The shadow is moved down and to the right <samp class="number">5</samp> percent and the blur is increased to <samp class="number">10</samp> percent. The color is also changed to a semi-transparent black.

Try changing the destination shadow to <samp class="string">"rgba(0,255,0,0.5)"</samp>, which is semi-transparent green.


### Text Outline

The second story can be viewed by clicking the button labeled __2__ under the editor. It demonstrates use of a second shadow. The [text shadow](/properties/#text-shadow) property supports any number of shadows. In this example, we insert a simple white shadow, with no offset, and only a <samp class="number">1</samp> percent blur. This forms a light outline around the text.

To ensure a smooth animation, the destination shadow property has the same number of shadows as the initialized one.  The simple outline shadow is the same in both.

Because the white outline is formed by a blur, it is a bit faint. It can be made bolder, though.


### Bolder Text Outline

The third story uses the same outline-shadow approach but repeats the shadow multiple times.  This technique can be used to make bolder outlines.