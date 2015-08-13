---
layout: post-animation
title: "Property Class"
category: examples
desc: "Animation examples that use property classes to define named sets of property values that are used multiple times."
tags: 
  - text
  - class
story: "examples/property-class.json5"
story2: "examples/property-class-2.json5"
---
# Property Class

This example demonstrates how to define and use a [property class](/properties/#classes).  A _class_ is used to create a named set of property values and then use those values in multiple places, avoiding duplication.

To create a class, add a <code>classes</code> entry in the root of the story.  Within the classes object, add a named child object with whatever property values you want.

This first example creates a class named <code>emboss</code> with properties that provide a sunken look. The three text items use the [class pseudo-property](/docs/properties/#class) in the <code>init</code> entry.