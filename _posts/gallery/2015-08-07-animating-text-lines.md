---
layout: post-animation
title: "Animating Text Lines"
category: gallery
desc: "Text teleprompter animation example using staggered movement of each line."
tags: 
  - text
thumbnail: "animating-text-lines.png"
story: "gallery/animating-text-lines.json5"

---
# Animating Text Lines

This example demonstrates an animated _teleprompter_ where each line of text is moved up the screen in turn.  However, the lines are staggered so that each line flys into position, making a nice animation effect. 

The overall text is slowly moved up the screen with a <samp class="number">35</samp> second <samp class="string">"linear"</samp> motion.  The lines are animated using the <code>lineInit</code> and <code>lineAction</code> entries which initialize and then change the line properties.

Similar to nested layers, text lines, words and characters have their own nesting levels.  When a line is positioned, it moves relative to where it would be normally, relative to the overall text's [placement](/concepts/#placement).
