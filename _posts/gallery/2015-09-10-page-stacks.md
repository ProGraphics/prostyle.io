---
layout: post-animation
title: "Page Stacks"
category: gallery
desc: "Stacks of pages with different layouts are animated in and out of focus."
flow_stack: true
tags: 
  - text
thumbnail: "page-stack.png"
story: "gallery/page-stack.json5"
story2: "gallery/page-stack-2.json5"
story3: "gallery/page-stack-3.json5"
---
# Page Stacks

The [stack](/models/#&middot;-stack-flow) flow is a premium extension that comes with [ProStyle Plus](/plus/). Each page starts on a _future_ stack, becomes the _current_ page, and ends up on a _past_ stack.

The extension has a default stack configuration, but can be changed to position the stacks differently.


### Default Configuration

The first story has seven pages, each with just one [text item](/models/#&middot;-text-item). Because it is not using the default [simple](/models/#&middot;-simple-flow) flow, a <code>flow</code> entry must be used so that the <code>flowType</code> can be set to <samp class="string">"stack"</samp>.

[Canvas](/models/#canvas) and [Frame](/models/#frame) padding is used with a shadow and background color to make a 3D border. 


### Angled Stack

The second story can be viewed by clicking the button labeled __2__ under the editor.  It adds a <code>stacks</code> entry which is used to change the flow's look.  The _current_ page is positioned up and to the left and rotated a little.  The pages in the _future_ stack are positioned increasingly behind the current page.  The _past_ stack is positioned off the canvas with no [opacity](/properties/#opacity), so the pages appear to fly away. 


### Snaked Pages

The third story uses a different custom configuration that moves the pages in a two dimensional snake pattern. It overrides the <code>pageAspectRatio</code> to make each page short and wide.