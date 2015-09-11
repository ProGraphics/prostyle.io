---
layout: post-animation
title: "Item Alignment"
category: examples
desc: "The anchor property may be used to easily align items on the x or y axis."
tags: 
  - text
  - transform-origin
story: "examples/item-alignment.json5"
story2: "examples/item-alignment-2.json5"
---
# Item Alignment

The [anchor](/properties/#anchor) property defines the point on an item that will be directly over the item's [position](/properties/#position). To align multiple items on, say, their left edge, just set their anchor's <code>x</code> value to -50. If they all have matching position <code>x</code> values they will all line up.  The anchor property can be animated as this demonstration shows.

This demonstration also shows how [classes](/properties/#class) can be used to avoid a lot of duplicate code.

### Vertical

The second story can be viewed by clicking the button labeled __2__ under the editor. It is very similar to the first except it animates in the <code>y</code> direction.