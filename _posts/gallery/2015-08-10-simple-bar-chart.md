---
layout: post-animation
title: "Simple Bar Chart"
category: gallery
meta_teaser: "This Pro Style demo uses using the simple bar chart extension."
teaser: "This Pro Style demo uses using the simple bar chart extension."
extensions:
 - name: "item.barchart"
tags: 
  - text
thumbnail: "animated-bar-chart.png"
story: "gallery/bar-chart.json5"
story2: "gallery/bar-chart-2.json5"
story3: "gallery/bar-chart-3.json5"
---
# Simple Bar Chart

The [bar chart](/models/#&middot;-bar-chart) is a premium extension that comes with [ProStyle Plus](/plus/). Use it to animate a simple set of data as bars.

The first story's chart is set up with <samp class="number">7</samp> <code>bars</code>. That defines how many datums the chart will expect.  If fewer data are provided, the chart will insert the value 0.

A <code>domain</code> is set so a datum equal to <samp class="number">7</samp> will be rendered as 100%. The height of the bar equals value/domain.  Numbers that exceed the domain will have the corresponding bars rendered higher than 100%. Negative numbers will have bars rendered in the opposite direction.   


### Background

The second story can be viewed by clicking the button labeled __2__ under the editor.  This story places the chart in a [layer](/models/#&middot;-layer-item) to add a background color.  It also changes the data a few times with varying effects. 


### Two Series

The third story shows two separate series.  This is achieved by laying one chart directly on top of another and use of _congruent_ data.

The second chart has array data which demonstrates how the bar chart can show _ranges_. 

