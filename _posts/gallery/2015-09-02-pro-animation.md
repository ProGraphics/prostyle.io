---
layout: post-animation
title: "Pro Animation"
desc: "Example text that demonstrates how to animate the word PRO back and forth."
category: gallery
tags: 
  - text
thumbnail: "pro-animation.png"
story: "gallery/pro.json5"
story2: "gallery/pro-2.json5"
story3: "gallery/pro-3.json5"
---
# Pro Animation

This animation configures the [canvas](/models/#canvas) with a background color and rounded corners.  A single [text item](/models/#&middot;-text-item) is animated back and forth.

This animation demonstrates the use of [shortcuts](/concepts/#shortcuts).

### Configuration

An <code>item</code> entry is all that is needed since there is only one _item_, on one _page_, with the default page _flow_ (simple). Since <samp>"text"</samp> is the default item type, the <code>itemType</code> entry is omitted.

An <code>init</code> entry is used to initialize properties. The <code>font</code> _size_ is set to <samp class="number">35</samp>% of the height of the canvas, the text color is set to <samp>"white"</samp> and the center of the text is <code>position</code>ed on the x axis at the center of the canvas minus <samp class="number">25</samp>% of the canvas' width.

### Animation

There is only one script, which contains two actions.  Therefore, the <code>scripts</code> entry is omitted and just <code>actions</code> is used instead. The array contains the actions. Each action animates the position over two seconds.

Click the buttons under the editor to view similar stories that animate other properties. 
