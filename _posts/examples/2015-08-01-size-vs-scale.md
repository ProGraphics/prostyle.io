---
layout: post-animation
title: "Size vs. Scale"
category: examples
desc: "Smaller items consume less memory than larger ones.  They can be scaled larger, but will look pixelated."
tags: 
  - text
story: "examples/size-vs-scale.json5"
story2: "examples/size-vs-scale-2.json5"
---
# Size vs. Scale

Item sizes are configured, such as an [image's](/models/#&middot;-image-item) width or a [text item's](/models/#&middot;-text-item) font size. The size defines how large the item will be [rendered as a bitmap](/concepts/#performance) into video memory.  That bitmap can then be streched using the [scale](/properties/#scale) property. Stretching the bitmap larger will cause pixelation.  To avoid the pixelation, you can use a larger size, but that will consume more memory.

The first story draws the word <samp class="string">"font"</samp> at <samp class="number">30</samp> percent of the page height. It then scales up from <samp class="number">100</samp> percent to <samp class="number">1000</samp> percent.  The pixelation result of scaling a bitmap up 10X is obvious.

### No Pixelation

The second story can be viewed by clicking the button labeled __2__ under the editor. It is almost identical to the first story. However, the font is ten times larger, at <samp class="number">300</samp> percent of the page height.  The starting and ending scales are one-tenth of the first story, scaling up from <samp class="number">10</samp> percent to <samp class="number">100</samp> percent. As you can see, the text has nice clean edges. However, more video memory is consumed.