---
layout: post-animation
title: "Spinning Letters"
category: examples
desc: "Animated letters spinning around in 3D, independently, with and without a text shadow."
tags: 
  - text
  - eases
story: "examples/spinning-letters.json5"
story2: "examples/spinning-letters-2.json5"
story3: "examples/spinning-letters-3.json5"
---
# Spinning Letters

The <code>init</code> entry is used to initialized properties that apply to all of the text.  The font is sized to <samp class="number">40</samp> percent of the frame's height. The text is colored and bolded.

The animation is applied at the character level, using <code>charAction</code>, as opposed to being at the text level using <code>action</code>.  Each letter is rotated on all three axes over 4 seconds, repeated 10 times.  Each letter starts animating <samp class="number">1.25</samp> seconds after the prior one starts.

Try adding a drop shadow to the text using the [textShadow](/properties/#text-shadow) property.

{% highlight javascript %}
init: {
  font: 40,
  style: "bold",
  pos:{z:10},
  color:"#33F",
  textShadow: 4
}
{% endhighlight %}


_It probably doesn't look as you expected._ The shadow is rendered as part of the bitmap, before the rotation.  So it rotates around with the text. Read about [compositing](/concepts/#compositing) for more information.

Luckily, it's fairly easy to fix this.


### Adding a Shadow
The second story can be viewed by clicking the button labeled __2__ under the editor. This story creates a second text item to act as the shadow. It has the same size and style, and animates the same way. The shadow text is made transparent, but with a shadow.  This way, all you see is the shadow.

{% include alert text="Unfortunately, this technique for rendering a shadow doesn't work in either Microsoft Internet Explorer or Microsoft Edge browser due to a bug where they render shadows at the same opacity as the fore color. Hopefully they'll fix it. In the interim, use *any* other browser." %}


### Make the Story Shorter
Because we have two similar text items, there's a lot of duplication.  We can remove the duplication by putting those values in _classes_.

The third story is exactly the same as the second, but uses classes. The common text property initialization is put in a <code>text</code> class.  All text items use this in their initialization by default.  The animation is put into a <code>rotate</code> class and both text items use it in their <code>charAction</code> entry.
