---
layout: post-animation
title: "Word Wrapping"
category: examples
desc: "A demonstration that uses the text width property to induce and animate word wrapping."
tags: 
  - text
  - textWidth
story: "examples/word-wrapping.json5"
story2: "examples/word-wrapping-2.json5"
---
# Word Wrapping

This demonstration displays very long text, which would normally stay on a single line.  However, the [text width](/properties/#text-width) property forces an absolute width, which makes the text wrap on word boundaries.


### Configuration

To have the text based in the top-left, and wrap down, the [anchor](/properties/#anchor) is set to <samp class="number">[-50,-50]</samp>.  A very thin border is added as <samp class="number">0.1</samp> which usually renders as a single pixel.


### Animation

The <code>width</code> is animated back and forth over 4 seconds per leg.


### Center Alignment

The second animation, which can be seen by clicking the button labeled __2__ underneath the editor, is a simplified version that animates with center alignment. 