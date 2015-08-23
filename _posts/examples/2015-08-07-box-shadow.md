---
layout: post-animation
title: "Box Shadows"
category: examples
desc: "The shadow property is used to create animated inset and drop shadows."
tags: 
  - text
  - shadow
story: "examples/shadow.json5"
story2: "examples/shadow-2.json5"
---
# Box Shadow

The [shadow](/properties/#shadow) property adds _drop shadows_ and _inset shadows_ to an item's bounding box. The first story simply adds one shadow and then removes it.  By default, the <code>inset</code> value is <samp class="boolean">false</samp>, so it will be a drop shadow. 

### Inset Shadow

The second story, which can be seen by clicking the button labeled __2__ underneath the editor, switches back and forth between a box shadow and an inset shadow.  It toggles between [eases](/concepts/#eases) with <samp class="string">"out"</samp> and <samp class="string">"in"</samp> directions so the transition between drop and inset is smooth.

Note that the final action doesn't just set the <code>shadow</code> property to <samp class="boolean">false</samp>. This is because _false_ would set the <code>inset</code> value to <samp class="boolean">false</samp> and not animate it.