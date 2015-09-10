---
layout: post-animation
title: "Property Animation"
category: gallery
desc: "Examples of independent properties being animated simultaneously."
tags: 
  - text
thumbnail: "property-animation.png"
story: "gallery/property-animation.json5"

---
# Property Animation

This story demonstrates the effect of many different property animations and how multiple [text items](/models/#&middot;-text-item) can be scripted in parallel. 


### Animation

Most of the animation scripts look generally the same.  The position value animations sequence two actions each, back and forth.  Therefore, those items use an <code>actions</code> entry.  The other only have one action so an <code>action</code> entry is all that is needed.  Using the simplest entry as needed is called [shortcutting](/concepts/#shortcuts).

The rotation animations are designed to be continuously smooth. To avoid any jarring when the animation restarts, a linear [ease](/concepts/#eases) is used.
