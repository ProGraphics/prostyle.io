---
layout: post-animation
title: "Color Cycling"
category: examples
desc: "Demonstration of cycling through multiple colors, blending from each color to the next."
tags: 
  - text-color
story: "examples/color-cycling.json5"
story2: "examples/color-cycling-2.json5"
---
# Color Cycling

This example initializes the [text color](/properties/#text-color) property of a [text](/models/#&middot;-text-item) item and then cycles through different colors. It uses a single [script](/concepts/#scripts) with four actions. The actions execute in order, each animating the text to a new color over <samp class="number">2</samp> seconds. Different [color string](/concepts/#color) formats are used for demonstration purposes.


### Color Wheel

The second story can be viewed by clicking the button labeled __2__ under the editor. It cycles through the hue colors keeping the saturation and lightness constant. 