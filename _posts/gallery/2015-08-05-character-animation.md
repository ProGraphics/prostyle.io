---
layout: post-animation
title: "Character Animation"
category: gallery
desc: "Text characters animated in 3D around a line. The character have a staggered delay."
tags: 
  - text
thumbnail: "character-animation.png"
story: "gallery/character-animation.json5"
story2: "gallery/character-animation-2.json5"
---

# Character Animation

Each character is animated independently around the <code>x</code> axis, with a delayed start of <samp class="number">0.12</samp> seconds after the prior one.

### Configuration

The story has two [items](/models/#items). An _image_ item displays an SVG line and is sized to <samp class="number">90</samp> percent of the width of the frame. It's properties are not changed with animation.

The text item is setup with the text <span class="string">"CHARACTER ANIMATION"</span>.

Try changing it.

### Animation

Since we are animating characters, we use <code>charInit</code> to initialize the properties directly on the characters and <code>charAction</code> to change them.

The _stagger_ value defines the delay before subsequent characters begin.  The _repeat_ and _yoyo_ values make the animation cycle back and forth eight times; the first time and seven repeats.

The first story uses the default font size. The second story uses short text so the font size is increased.  The [font](/properties/#font) property is not available at the character level, so it must be set in an <code>init</code> entry. 